import L from './vendor/leaflet';

let map = L.map('map', {attributionControl: false}).setView([55.817892, 37.634053], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let desktopMarker = L.marker(L.latLng(55.816739, 37.63714), {
  icon: L.icon({
    iconUrl: '../img/svg/location-marker-desktop.svg',
    iconSize: [48, 48],
    iconAnchor: [20, 20],
  }),
});
desktopMarker.addTo(map);

const mobileBreakpoint = window.matchMedia('(max-width:767px)');
const mobileBreakpointChecker = () => {
  if (mobileBreakpoint.matches) {
    let mobileIcon = desktopMarker.options.icon;
    mobileIcon.options.iconSize = [28, 28];
    desktopMarker.setIcon(mobileIcon);
  }
};
mobileBreakpoint.addListener(mobileBreakpointChecker);
mobileBreakpointChecker();

const tabletBreakpoint = window.matchMedia('(min-width:768px) and (max-width:1199px)');
const tabletBreakpointChecker = () => {
  if (tabletBreakpoint.matches) {
    let tabletIcon = desktopMarker.options.icon;
    tabletIcon.options.iconSize = [42, 42];
    desktopMarker.setIcon(tabletIcon);
  }
};
tabletBreakpoint.addListener(tabletBreakpointChecker);
tabletBreakpointChecker();

const desktopBreakpoint = window.matchMedia('(min-width:1200px)');
const desktopBreakpointChecker = () => {
  if (desktopBreakpoint.matches) {
    let desktopIcon = desktopMarker.options.icon;
    desktopIcon.options.iconSize = [48, 48];
    desktopMarker.setIcon(desktopIcon);
  }
};
desktopBreakpoint.addListener(desktopBreakpointChecker);
desktopBreakpointChecker();
