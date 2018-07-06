// <!DOCTYPE html>
// <html>
//   <head>
//     <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
//     <meta charset="utf-8">
//     <title>Transit layer</title>
//     <style>
//       /* Always set the map height explicitly to define the size of the div
//        * element that contains the map. */
//       #map {
//         height: 40%;
//         width: 40%;
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
//     <script>

//     var lat = 32.853238;
//     var lng = -96.831143;


require("dotenv").config();
var keys = require("./keys");
var Google = require("google");
var google = new Google(keys.google);

      function initMap() {
        var location = {lat: lat, lng: lng};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: location
        });

        var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);
      }
    // </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=" + keys.google + "&callback=initMap">
    </script>
//   </body>
// </html>