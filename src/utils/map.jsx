import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  OverlayView,
} from 'react-google-maps';

export const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={12}
    defaultCenter={{ lat: 41.882076, lng: 12.467271 }}
    options={{
      scrollwheel: false,
    }}
    onClick={props.onMapClick}
  >
    <Marker
      position={{
        lat: 41.882076,
        lng: 12.467271,
      }}
      key="Taiwan"
      defaultAnimation="2"
    />
  </GoogleMap>
));
