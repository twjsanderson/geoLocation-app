import React from 'react';
import { Button } from 'react-bootstrap';

const ShowLocation = (props) => {
    const {
        geoLocationAvailable, 
        geoLocationEnabled,
        geoLocationError,
        geoLocationData,
        showData,
        clearData
    } = props;
    return (
        <section id='showlocation'>
            {              
                geoLocationAvailable === false ? <h1>Your browser does not support geolocation tracking.</h1> 
                    : geoLocationEnabled === false ? <h1>Please enable geolocaiton tracking in your browser to use this service.</h1>
                    : geoLocationError !== null ? <h1>{geoLocationError}</h1>
                    : geoLocationData ? ( 
                        <>
                            <h1>Latitude: {geoLocationData.latitude}</h1>
                            <h1>Longitude: {geoLocationData.longitude}</h1> 
                        </>
                    ) : null
            }
            <Button 
                onClick={() => showData()}
            >
                Show Data
            </Button>
            <Button 
                onClick={() => clearData()}
            >
                Clear Data
            </Button>
        </section>
    );
};

export default ShowLocation;