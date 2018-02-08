var map = document.getElementById("map");
window.onload = function(){
function search(){

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(succes, error);
  };
};


var succes = function(posicion) {

  var latitud;
  var longitud;
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitude;
console.log("lat = " + latitud + "long = " + longitud);
var map = document.getElementById("map");
  var myLocation = new google.maps.Marker({
          position: {lat: latitud, lng: longitud},
          zoom: 18,
          center: {lat:latitud, lng:longitud},
          map: map
        });
};

var error = function(err) {
  console.log(err + err.message);
};

document.getElementById("find-btn").addEventListener("click",search);


var startingPoint = document.getElementById("from");
var arrivalPoint = document.getElementById("where");

new google.maps.places.Autocomplete(startingPoint);
new google.maps.places.Autocomplete(arrivalPoint);


var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;

var calculateAndDisplayRoute = function(directionsService, directionsDisplay){
  directionsService.route({
    origin: startingPoint.value,
    destination: arrivalPoint.value,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsDisplay.setDirections(response);
      directionsDisplay.setMap(map);
    } else {
      window.alert("No encontramos una ruta");
    }
  });
};


var traceRoute = function() {
calculateAndDisplayRoute(directionsService, directionsDisplay);
};

document.getElementById("ruta-btn").addEventListener("click", traceRoute);
};

