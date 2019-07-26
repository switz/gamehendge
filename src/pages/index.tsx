import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import L from 'leaflet'
import ExifReader from 'exifreader'
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

const readerHandler = (setLatLong, file) => readerEvent => {

};

const onChange = setLatLong => (e: React.SyntheticEvent<HTMLInputElement>) => {
  const files = e.target.files;

  console.log(files)
  setLatLong([]);
  // We only need the start of the file for the Exif info.
  Array.from(files).map(async (file) => {
    const contentBuffer = await readFileAsync(file);
    const url = await readFileAsyncURL(file);

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

const Icon = styled.div`
  height: 12px;
  width: 12px;
  background: red;
  border-radius: 100%;
  opacity: 0.5;
`;

const icon = L.divIcon({
  className: 'custom-icon',
  html: ReactDOMServer.renderToString(<Icon />)
});

const IndexPage = () => {
  const [latLong, setLatLong] = React.useState([[51.505, -0.09]]);

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
              {latLong.map((ll, idx) =>
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
