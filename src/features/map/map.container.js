import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

// components
import MapView from './map.component';

const MapContainer = (props) => {
    const { mapStyles, lat, lon } = props;

    const mapCreator = () => {
        return (
            <Map
                google={props.google}
                initialCenter={{
                    lat: lat,
                    lng: lon
                  }}
                zoom={15}
                style={mapStyles}
            />  
        )
    };

    return (
          
        <section id='map'>
            <MapView 
                mapCreator={mapCreator} 
            />
        </section>
    )
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCFreU8pgnfgCuXMr5XgJMG3nBCIJqS4Q4'
})(MapContainer);