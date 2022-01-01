import React from "react";
import mapboxgl from "!mapbox-gl";

import styles from "./styles.module.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibG9nNjl4IiwiYSI6ImNreHVqZ20ydTN4dDYyeHVidXV5cmhjdHUifQ.DAFKBmgesQL-1tnMiMgsMA";

// TODO: add marker
// img https://docs.mapbox.com/mapbox-gl-js/example/add-image/
export default function MapComponent() {
  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  const [lng, setLongitude] = React.useState(35.0341);
  const [lat, setLatitude] = React.useState(48.4367);
  const [zoom, setZoom] = React.useState(16.4);

  React.useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  return <div ref={mapContainer} className={styles.mapContainer} />;
}
