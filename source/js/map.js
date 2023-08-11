import L from 'leaflet';

let map = L.map('map', {attributionControl: false}).setView([55.817892, 37.634053], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

L.marker(L.latLng(55.816739, 37.63714), {
  icon: L.icon({
    iconUrl: '../../img/svg/location-marker-desktop.svg',
    iconSize: [48, 48],
    iconAnchor: [20, 20],
  }),
}).addTo(map);
