
import React from "react";
/*global google */

const _ = require("lodash");
const { compose, withProps, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  BicyclingLayer,

} = require("react-google-maps");
const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

const MapWithASearchBox = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCwCUd2sBpkCjzvyXkGukLmlEAke3bHVK0&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `450px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  // _insertButton: (parentThis, map)=> {
  //   let controlDiv = document.createElement('div');
  //   map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
  // },
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        bounds: null,
        center: {
          lat: 32.758891, lng:  -96.822683
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onBoundsChanged: () => {
          this.setState({
            bounds: refs.map.getBounds(),
            center: refs.map.getCenter(),
          })
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers,
          });
          // refs.map.fitBounds(bounds);
        },
      })
    },
  }),
  withScriptjs,
  withGoogleMap

)(props =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    // controls={this._insertButton}

  >

  {/* const image = "" */}
        <Marker 
      animation= {google.maps.Animation.DROP}
      defaultPosition= {{lat: 32.758891, lng: -96.822683}}
      // icon={image}
      
      />
      <BicyclingLayer autoUpdate />


    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >

      <input
        type="text"
        placeholder="Enter city and state to search"
        id="show"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `50%`,
          height: `50px`,
          padding: `12px`,
          marginLeft: `230px`,
          margiTop: `1.5px`,
          align: `center`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgb(243, 136, 44)`,
          backgroundColor: `white`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}

      />



    </SearchBox>
    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )}

  </GoogleMap>

);


<MapWithASearchBox />

export default MapWithASearchBox;
