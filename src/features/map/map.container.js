import React, { useState } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

// components
import MapView from './map.component';

const MapContainer = (props) => {
    const { mapStyles, lat, lon } = props;

    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});

    const onMarkerClick = (props, marker) => {
        setSelectedPlace(props);
        setActiveMarker(marker);
        setShowingInfoWindow(true);
    };

    const onMapClicked = () => {
        if (showingInfoWindow) {
            setShowingInfoWindow(false);
            setActiveMarker(null);
        }
    };

    const mapCreator = () => {
        return (
            <Map
                google={props.google}
                initialCenter={{
                    lat: lat,
                    lng: lon
                  }}
                zoom={13}
                style={mapStyles}
                onClick={onMapClicked}
            >
                <Marker
                    name={'Your current approximate location'}
                    onClick={onMarkerClick}
                    position={{ 
                        lat: lat,
                        lng: lon 
                    }} 
                />
                <InfoWindow
                    marker={activeMarker}
                    visible={showingInfoWindow}>
                        <div>
                            <h4>{selectedPlace.name}</h4>
                        </div>
                </InfoWindow>
            </Map>  
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
    apiKey: process.env.REACT_APP_GOOGLE_MAP_API
})(MapContainer);