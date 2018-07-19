import React, {Component} from "react";
import Map from "./Map";
export class MapContainer extends Component {

	render() {
		return (
			<Map
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCwCUd2sBpkCjzvyXkGukLmlEAke3bHVK0&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `100%` }} className="container"/>}
				mapElement={<div style={{ height: `100%` }} className="section center col m6"/>}
				customLat={33.002470}
				customLong={-96.763201}
			/>
		);
	}
}