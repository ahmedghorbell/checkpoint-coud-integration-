import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(props) {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB8r1Czw1w3ADfhWEjNckekKg062vtN-7k" }}
        defaultCenter={props.location}
        defaultZoom={props.zoomLevel}
      >
        <AnyReactComponent
          lat={props.location.lat}
          lng={props.location.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
