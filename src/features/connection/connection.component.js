import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';


const ConnectionView = (props) => {
    const { connectionData, getConnectionData, clearConnectionData } = props;
    return (
        <section id='connection-view'>
            <Container>
                <Row className='text-center'>
                    <Col className='p-2'>
                        <h1>
                            Connection Check
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
                        connectionData !== null ?
                        <>
                            <Col md={6} className='mt-3 text-center'>
                                <h4>Network Type: {connectionData.networkType}</h4>
                                <h4>Round Trip Time: {connectionData.roundTrip} milliseconds</h4>
                                <h4>Downlink Speed: {connectionData.approxBandwith} megabits per second</h4>
                            </Col> 
                            <Col>
                                <h5> 
                                    <span className='title'>Round Trip Time</span> <br /> The estimated time it takes your device to 
                                    get information from a server and display a website on your screen. 
                                </h5>
                                <h5> 
                                    <span className='title'>Downlink Speed</span> <br /> Your device's approximate bandwidth speed.
                                </h5>
                            </Col>
                        </>
                            : null
                    }
                </Row>
                {/* <Row>
                    <Col md={6}>
                        <h3> 
                            Round Trip Time: The estimated time it takes your device to 
                            get information from a server and display a website on your screen.
                            (rounded to the nearest multiple of 25 milliseconds). 
                        </h3>
                    </Col>
                </Row>     */}
                <Row>
                    <Col className='text-center pb-3'>
                        <Button 
                            className='tool-button'
                            onClick={() => getConnectionData()}
                        >
                            Show Connection Info
                        </Button>
                        <Button
                            className='tool-button'
                            onClick={() => clearConnectionData()}
                        >
                            Clear Connection Information
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ConnectionView;
