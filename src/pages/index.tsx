import * as React from 'react'
import ExifReader from 'exifreader'
import Loadable from '@loadable/component'
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import styled from '@emotion/styled'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'


function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsArrayBuffer(file);
  })
}

function readFileAsyncURL(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  })
}

const onChange = setLatLong => (e: React.SyntheticEvent<HTMLInputElement>) => {
  const files = e.target.files;

  console.log(files)
  setLatLong([]);
  // We only need the start of the file for the Exif info.
  Array.from(files).map(async (file) => {
    const [contentBuffer, url] = await Promise.all([readFileAsync(file), readFileAsyncURL(file)]);

    try {
      const tags = ExifReader.load(contentBuffer);

      // The MakerNote tag can be really large. Remove it to lower
      // memory usage if you're parsing a lot of files and saving the
      // tags.
      delete tags['MakerNote'];

      const { GPSLatitude, GPSLongitude } = tags;
      console.log({ GPSLatitude, GPSLongitude });
      console.log(tags)

      setLatLong(existing => existing.concat([[Number(GPSLatitude.description), -Number(GPSLongitude.description), url]]))

    } catch (error) {
      alert(error);
    }
  });
}
let icon = null;

if (typeof window !== 'undefined') {
  icon = L.divIcon({
    className: 'custom-marker',
  });
}

const IndexPage = () => {
  const [latLong, setLatLong] = React.useState([[51.505, -0.09]]);

  if (typeof window === 'undefined') return null;

  return (
    <IndexLayout>
      <Page>
        <Container>
          <div>
            <h1>Gamehendge</h1>

            <input type="file" onChange={onChange(setLatLong)} multiple />
          </div>

          <div style={{ height: 600 }}>
            <Map center={latLong[0]} zoom={19} style={{ height: 600 }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {icon && latLong.map((ll, idx) =>
                <Marker position={ll} key={idx} icon={icon}>
                  <Popup>Here's your shitty image. <br /> <img src={ll[2]} /></Popup>
                </Marker>
              )}
            </Map>
          </div>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
