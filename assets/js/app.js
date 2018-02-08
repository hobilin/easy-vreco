function initMap() {
  var laboratoriaSCL = {lat: -33.418750, lng: -70.641694};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: laboratoriaSCL
  });
  var marker = new google.maps.Marker({
    position: laboratoriaSCL,
    map: map
  });
}

function findMe(){
  //Verificar que el navegador soporte la geolocalización
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(localizacion, error);
  } 
//creando funcion de localizacion para obtener longitud y latitud
  function localizacion(posicion){
    var latitude = posicion.coords.latitude;
    var longitude = posicion.coords.longitude;
    var miUbicacion = new google.maps.Marker({
    position: {lat: latitude, lng: longitude},
    map: map
    })
    //map.setZoom(18),
    //map.setCenter({lat: latitude, lng: longitude})
  }

//creando funcion por si se genera un error
  function error(){
    alert('No se pudo obtener tu ubicación');  
  }
}
document.getElementById('encuentrame').addEventListener('click',findMe);





