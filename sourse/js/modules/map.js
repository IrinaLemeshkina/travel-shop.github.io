/*let map = L.map('map').setView([55.774836, 37.632664], 17);
let leaflet = L.icon({
  iconUrl: './img/marker-icon.png',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});
let marker = L.marker([55.774836, 37.632664], { icon: leaflet }).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png?{foo}', { foo: 'bar' }).addTo(map);
*/
const map = () => {
  const map = L.map('map').setView([55.8235, 37.6232], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const iconOptions = {
    iconUrl: 'img/marker-icon.png',
    iconSize: [32, 44],
  };

  const customIcon = L.icon(iconOptions);

  let markerOptions = {
    icon: customIcon,
  };

  const marker = L.marker({ lat: 55.8166, lng: 37.6369 }, markerOptions);

  marker.addTo(map);
};

export {map};
