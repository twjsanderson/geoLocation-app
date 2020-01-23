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
                <Row>
                    <h1>Title</h1>
                    <h3>Details about this section</h3>
                </Row>
                <Row>
                    <Col>
                        {              
                            geoLocationAvailable === false ? 
                                <h1>Your browser does not support geolocation tracking.</h1> 
                                : geoLocationEnabled === false ? 
                                    <h1>Please enable geolocaiton tracking in your browser to use this service.</h1> 
                                    : geoLocationError !== null ? 
                                        <h1>{geoLocationError}</h1>
                                        : geoLocationData ? ( 
                                                <>
                                                    <h1>Latitude: {geoLocationData.latitude}</h1>
                                                    <h1>Longitude: {geoLocationData.longitude}</h1> 
                                                </>
                                            ) : null
                        }
                    </Col>
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
                </Row>
            </Container>
        </section>
    );
};

export default GetLocationView;