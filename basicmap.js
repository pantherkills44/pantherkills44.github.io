// The latitude of Charlotte, NC, USA is 35.227085, and the longitude is -80.843124
var charlotte = [35.227085, -80.843124]
var cpcc = [35.2176665, -80.831473];
var map = L.map('map').setView(charlotte, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var cpccmarker = L.marker(cpcc).addTo(map);
