// <!DOCTYPE html>
// <html>
//   <head>
//     <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
//     <meta charset="utf-8">
//     <title>Bicycling layer</title>
//     <style>
//       /* Always set the map height explicitly to define the size of the div
//        * element that contains the map. */
//       #map {
//         height: 100%;
//       }
//       /* Optional: Makes the sample page fill the window. */
//       html, body {
//         height: 100%;
//         margin: 0;
//         padding: 0;
//       }
//     </style>
//   </head>
//   <body>
//     <div id="map"></div>


require("dotenv").config();
var keys = require("./keys");
var Google = require("google");
var google = new Google(keys.google);

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: lat, lng: lng}
        });

        var bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map);
      }
   
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=" + keys.google + "&callback=initMap">
    </script>
