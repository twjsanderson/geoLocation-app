import React, { useState } from 'react';
import { geolocated } from "react-geolocated";

// components
import ShowLocation from './getLocation.component';
 
const GetLocation = (props) => {
    const { isGeolocationAvailable, isGeolocationEnabled, coords, positionError } = props;

    const [geoLocationData, setGeoLocationData] = useState(null);
    const [geoLocationAvailable, setGeoLocationAvailable] = useState(null);
    const [geoLocationEnabled, setGeoLocationEnabled] = useState(null);
    const [geoLocationError, setGeoLocationError] = useState(null);

    const showData = () => {
        setGeoLocationAvailable(isGeolocationAvailable);
        setGeoLocationEnabled(isGeolocationEnabled);
        setGeoLocationError(positionError);
        setGeoLocationData(coords);
    };

    const clearData = () => {
        setGeoLocationAvailable({});
        setGeoLocationEnabled(null);
        setGeoLocationError(null);
        setGeoLocationData(null);
    };
    
    return (
        <section id="get-location">
            <ShowLocation 
                geoLocationAvailable={geoLocationAvailable} 
                geoLocationEnabled={geoLocationEnabled}
                geoLocationError={geoLocationError}
                geoLocationData={geoLocationData}
                showData={showData}
                clearData={clearData}
            />
        </section>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(GetLocation);