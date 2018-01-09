import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

export const GettingStartedGoogleMap = withGoogleMap(
  ({ onMapLoad, onMapClick, lat, lng }) => (
    <GoogleMap
      ref={onMapLoad}
      defaultZoom={12}
      defaultCenter={{ lat, lng }}
      options={{
        scrollwheel: false,
      }}
      onClick={onMapClick}
    >
      <Marker
        position={{
          lat,
          lng,
        }}
        key="Taiwan"
        defaultAnimation="2"
      />
    </GoogleMap>
  ),
);
