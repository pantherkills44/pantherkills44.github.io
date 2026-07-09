// 36.2048° N latitude and 138.2529° E longitude
var coordinates = [36.2048, 138.2529]
var map = L.map('map').setView(coordinates, 13);
var place1 = [35.6594, 139.7006]
var place2 = [35.6762, 139.6503]
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from Japan!!!</p>").addTo(map);
var marker1 = L.circle(place1,{color: "black", fillColor: "#3b4040", radius: 80}).addTo(map);
