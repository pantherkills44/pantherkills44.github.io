// 36.2048° N latitude and 138.2529° E longitude
var coordinates = [36.2048, 138.2529]
var map = L.map('map').setView([coordinates, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from Japan!!!</p>").addTo(map);
