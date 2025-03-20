var map = L.map('map').setView([53.587153, 9.898643], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker([53.587153, 9.898643]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();