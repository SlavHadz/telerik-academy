
var mapImg = document.getElementById('map-image');
navigator.geolocation.getCurrentPosition(function(position) {
    parseLatandLongCoords(position, mapImg);
});

function parseLatandLongCoords(position, image) {
    var coordsObj = {
        lat: position.coords.latitude,
        long: position.coords.longitude
    }
    var imgSrc ="http://maps.googleapis.com/maps/api/staticmap?center=" + coordsObj.lat + "," + coordsObj.long + "&zoom=15&size=500x500&sensor=false";
    image.setAttribute('src', imgSrc);
}

setInterval(function () {
    var currentTime = new Date();
    document.getElementById('clock').innerHTML = currentTime.getHours() + 
    ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();
}, 1000);