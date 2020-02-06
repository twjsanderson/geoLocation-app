import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

// constants
import locationContent from '../../constants/toolInformation';

// components
import MapContainer from '../map';
import ToolDescriptions from '../toolDescriptions';

const GetLocationView = (props) => {
    const {
        geoLocationAvailable, 
        geoLocationEnabled,
        geoLocationError,
        geoLocationData,
        showData,
        clearData
    } = props;

    const content = locationContent.locationContent;
    const whiteStyle = { style: 'm-4 bg-white text-center rounded'};

    return (
        <section id='getlocation-view'>
            <Container>
                <ToolDescriptions 
                    title={content.title}
                    description={content.description}
                    how={content.how}
                    who={content.who}
                    why={content.why}
                    style={whiteStyle.style}
                />
                <Row>
                    {              
                        geoLocationAvailable === false ? 
                            <h4>Your browser does not support geolocation tracking.</h4> 
                            : geoLocationEnabled === false ? 
                                <h4>Please enable geolocaiton tracking in your browser to use this tool.</h4> 
                                : geoLocationError !== null ? 
                                    <h4>{geoLocationError}</h4>
                                    : geoLocationData ? ( 
                                            <Col className='p-3 bg-white rounded'>
                                                <Row>
                                                    <h3 className='px-2'>Latitude:</h3> 
                                                    <h4 className='text-primary p-1'>{geoLocationData.latitude}</h4>
                                                </Row>
                                                <Row>
                                                    <h3 className='px-2'>Longitude:</h3> 
                                                    <h4 className='text-primary p-1'>{geoLocationData.longitude}</h4>
                                                </Row>
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