import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  BicyclingLayer,
  InfoWindow,
  //TrafficLayer,

} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    /**
     * Note: create and replace your own key in the Google console.
     * https://console.developers.google.com/apis/dashboard
     * The key "AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q" can be ONLY used in this sandbox (no forked).
     */
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwCUd2sBpkCjzvyXkGukLmlEAke3bHVK0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap 
  defaultZoom={14} 
  defaultCenter={{ lat: 32.770713, lng: -96.798871 }}> 
      <Marker 
      position={{ lat: 32.770713, lng: -96.798871 }}
      onClick={props.onToggleOpen} 
      //animation={}
      
      />
    
        <BicyclingLayer autoUpdate />
        {/* <TrafficLayer autoUpdate /> */}

  </GoogleMap>
));

//ReactDOM.render(<MyMapComponent isMarkerShown />, document.getElementById("root"));


<MyMapComponent isMarkerShown />

export default MyMapComponent;


