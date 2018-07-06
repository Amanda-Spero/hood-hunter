
require("dotenv").config();
var keys = require("./keys");
var Google = require("google");
var google = new Google(keys.google);

function getCoords() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 8,
//     center: {lat: -34.397, lng: 150.644}
//   });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('search').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }

    var lat = results[0].geometry.viewport.f.f;
    var lng = results[0].geometry.viewport.b.b;

    console.log(results[0].geometry.viewport.f.f) //lat
    console.log(results[0].geometry.viewport.b.b) //long
    

  });
}

<script async defer
src="https://maps.googleapis.com/maps/api/js?key=" + keys.google + "&callback=initMap">
</script>
