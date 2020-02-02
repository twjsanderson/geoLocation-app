import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';

// constants
import connectionContent from '../../constants/toolInformation';

//components
import ToolDescriptions from '../toolDescriptions';

const content = connectionContent.connectionContent;

const ConnectionView = (props) => {
    const { connectionData, getConnectionData, clearConnectionData } = props;
    return (
        <section id='connection-view'>
            <Container>
                <ToolDescriptions 
                    title={content.title}
                    description={content.description}
                    how={content.how}
                    who={content.who}
                    why={content.why}
                />
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
                <Row>
                    <Col className='text-center pb-3'>
                        <Button 
                            className='tool-button'
                            onClick={() => getConnectionData()}
                        >
                            Show Connection Information
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
