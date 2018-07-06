// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Place searches</title>
//     <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
//     <meta charset="utf-8">
//     <style>
//       /* Always set the map height explicitly to define the size of the div
//        * element that contains the map. */
//       #map {
//         height: 40%;
//         width: 40%
//       }
//       /* Optional: Makes the sample page fill the window. */
//       html, body {
//         height: 100%;
//         margin: 0;
//         padding: 0;
//       }
//     </style>
//     <script>
//       // This example requires the Places library. Include the libraries=places
//       // parameter when you first load the API. For example:
//       // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">


require("dotenv").config();
var keys = require("./keys");
var Google = require("google");
var google = new Google(keys.google);

      var map;
      var infowindow;


    //   locationLng = 32.853238;
    //   locationLng = -96.831143;

      function initMap() {
        var location = {lat: lat, lng: lng};

        map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 15
        });

        //adds animation to the marker, but only for the address that was searched for
          var locationMarker = new google.maps.Marker({position: location, map: map, animation: google.maps.Animation.DROP});


        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: location,
          radius: 1500,

          //need to add searchOptions array to search page, all checked options are pushed into the array (clothes_stores, restaurants, etc)
          type: [searchOptions]
        }, callback);
      }

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }


      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
        });

        google.maps.event.addListener(marker, 'mouseover', function() {
          //need to add place.type at least to the hover info
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
//     </script>
//   </head>
//   <body>
    // <div id="map"></div>



//??How to format the link to the google library?//
 <script src="https://maps.googleapis.com/maps/api/js?key=" + keys.google + "&libraries=places&callback=initMap" async defer></script>



//   </body>
// </html>