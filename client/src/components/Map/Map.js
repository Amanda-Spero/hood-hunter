import React, {Component} from "react";
import {withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>{
              
    return (
        <GoogleMap
          defaultZoom={14}
          center={ { lat:  props.customLat, lng: props.customLong } }
          >
        </GoogleMap>
      );
    }
))

export default Map;