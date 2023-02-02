/* eslint import/no-webpack-loader-syntax: off */

import React from "react";
import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";
// @ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoicGlraW5rb2kiLCJhIjoiY2txYTBuYWRkMDM2MjJuc2hqdTl5MjN2OSJ9.W-5IfA5xA6ohWqDePU122A';

if (!navigator.geolocation) {
  alert("Tu navegador no tine opción de Geolocation");
  throw new Error("Tu navegador no tine opción de Geolocation");
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
