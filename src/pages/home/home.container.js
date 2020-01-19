import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { geolocated } from "react-geolocated";
import HomeComponent from './home.component'

const Home = (props) => {
    const { isGeolocationAvailable, isGeolocationEnabled, coords, positionError } = props;

    const [geoLocationData, setGeoLocationData] = useState({});
    const [geoLocationAvailable, setGeoLocationAvailable] = useState(null);
    const [geoLocationEnabled, setGeoLocationEnabled] = useState(null);
    const [geoLocationError, setGeoLocationError] = useState(null);

    const showData = () => {
        setGeoLocationAvailable(isGeolocationAvailable);
        setGeoLocationEnabled(isGeolocationEnabled);
        setGeoLocationError(positionError);
        setGeoLocationData(coords);
    }
    
    return (
        <section id='home'>
        <HomeComponent />
            <h1>{geoLocationData.latitude} {geoLocationData.longitude}</h1>
            <h3>{geoLocationError}</h3>
            <Button onClick={() => showData()}>Click me</Button>
        </section>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
})(Home);
