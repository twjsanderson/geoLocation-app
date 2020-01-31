import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

// components
import MapContainer from '../map';

const GetLocationView = (props) => {
    const {
        geoLocationAvailable, 
        geoLocationEnabled,
        geoLocationError,
        geoLocationData,
        showData,
        clearData
    } = props;
    return (
        <section id='getlocation-view'>
            <Container>
                <Row className='text-center'>
                    <Col className='p-2'>
                        <h1>
                            Where are you?
                        </h1>
                        <h4 className='p-4'>
                            This tool uses the browser to find your location on a map with your current 
                            latitude and longitude.
                        </h4>
                        <h3>How?</h3>
                        <p>
                            Using something called the Browser Object Model (or BOM), developers can 
                            get the latitude and longitude of a device or computer that navigates 
                            to their website. If you want to try this yourself check out our free 
                            exercise page here: <br /> Exercise #1 
                        </p>
                        <h3>Who?</h3>
                        <p>
                            This technique (and many variations of it) are used all over the internet 
                            by small businesses, large corporations, hackers, governments agencies 
                            and personal websites. 
                        </p>
                        <h3>Why?</h3>
                        <p>
                            Geo location tracking is usually employed by businesses who want to learn 
                            more about their customers, help them find physical storefronts and make 
                            it easier to connect users with relevant content. This functionality helps 
                            developers do everything from track user engagement to find out where people 
                            live! 
                        </p>
                    </Col>
                </Row>
                <Row>
                    {              
                        geoLocationAvailable === false ? 
                            <h4>Your browser does not support geolocation tracking.</h4> 
                            : geoLocationEnabled === false ? 
                                <h4>Please enable geolocaiton tracking in your browser to use this tool.</h4> 
                                : geoLocationError !== null ? 
                                    <h4>{geoLocationError}</h4>
                                    : geoLocationData ? ( 
                                            <Col>
                                                <h4>Latitude: {geoLocationData.latitude}</h4>
                                                <h4>Longitude: {geoLocationData.longitude}</h4>
                                                {
                                                    geoLocationData.accuracy > 100 ? 
                                                        <h4>Location Accuracy: <span id='poor'>Poor</span></h4> 
                                                        : geoLocationData.accuracy > 15 ? 
                                                            <h4>Location Accuracy: <span id='good'>Good</span></h4> 
                                                            : <h4>Location Accuracy: <span id='excellent'>Excellent</span></h4>
                                                }  
                                                <h4>Your estimated GPS coordinates are within <span id='accuracy'>{geoLocationData.accuracy} meters</span> of your actual location</h4>
                                            </Col>
                                        ) : null
                    }
                    <Col>
                        {
                            geoLocationData ? (
                                    <MapContainer 
                                        mapStyles={{ width: '100%', height: '100%'}} 
                                        lat={geoLocationData.latitude}  
                                        lon={geoLocationData.longitude} 
                                    /> 
                                
                            ) : null
                        }
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center pb-3'>
                        <Button
                            className='tool-button' 
                            onClick={() => showData()}
                        >
                            Show My Location
                        </Button>
                        <Button
                            className='tool-button' 
                            onClick={() => clearData()}
                        >
                            Clear My Location
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default GetLocationView;