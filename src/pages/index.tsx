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

const onChange = (setLatLong, setInitial, setWorking) => async (e: React.SyntheticEvent<HTMLInputElement>) => {
  setWorking(true);
  console.log('starting');
  const files = e.target.files;

  // We only need the start of the file for the Exif info.
  const output = await Promise.all(Array.from(files).map(async (file) => {
    const [contentBuffer, url] = await Promise.all([readFileAsync(file), readFileAsyncURL(file)]);

    try {
      const tags = ExifReader.load(contentBuffer);

      // The MakerNote tag can be really large. Remove it to lower
      // memory usage if you're parsing a lot of files and saving the
      // tags.
      delete tags['MakerNote'];

      const { GPSLatitude, GPSLongitude } = tags;
      // console.log({ GPSLatitude, GPSLongitude });
      // console.log(tags)

      return [Number(GPSLatitude.description), -Number(GPSLongitude.description), url, file.name];

    } catch (error) {
      alert(error);
    }
  }));

  setLatLong(output);
  setInitial(false);
  setWorking(false);
}

let icon = null, bdn = null;

if (typeof window !== 'undefined') {
  icon = L.divIcon({
    className: 'custom-marker',
  });
}

const IndexPage = () => {
  const [isWorking, setWorking] = React.useState(false);
  const [isInitial, setInitial] = React.useState(true);
  const [latLong, setLatLong] = React.useState([[44.9738, -93.2578]]);

  if (typeof window === 'undefined') return null;

  return (
    <IndexLayout>
      <Page>
        <Container>
          <div>
            <input type="file" onChange={onChange(setLatLong, setInitial, setWorking)} multiple />
            <div>Work is in progress: {isWorking ? 'yes' : 'no'}</div>
          </div>

          <div style={{ height: 600 }}>
            <Map center={latLong[0]} zoom={isInitial ? 17 : 19} style={{ height: 600 }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {!isInitial && icon && latLong.map((ll, idx) =>
                <Marker position={ll} key={idx} icon={icon}>
                  <Popup><div>Here's your image.</div><h4>{ll[3] || 'No File Name?'}</h4> <img src={ll[2]} /></Popup>
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
