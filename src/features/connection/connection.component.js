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
    const whiteStyle = { style: 'm-4 p-4 bg-white text-center rounded' };

    return (
        <section id='connection-view'>
            <Container className='p-4'>
                <ToolDescriptions 
                    title={content.title}
                    description={content.description}
                    how={content.how}
                    who={content.who}
                    why={content.why}
                    style={whiteStyle.style}
                />
                {
                    connectionData !== null ?
                    <Row className='p-4 bg-white rounded'>
                        <Col md={6} className='h-100 p-3 text-left my-auto'>
                            <Row className='p-3'>
                                <h3 className='px-2'>Network Type:</h3> 
                                <h3 className='text-primary'> {connectionData.networkType}</h3>
                            </Row>
                            <Row className='p-3'>
                                <h3 className='px-2'>Round Trip Time:</h3> 
                                {
                                    connectionData.roundTrip < 100 ?
                                        <h4 className='good p-1'> {connectionData.roundTrip} milliseconds (Good)</h4>
                                        : <h4 className='poor p-1'> {connectionData.roundTrip} milliseconds (Poor)</h4>
                                }
                            </Row>
                            <Row className='p-3'>
                                <h3 className='px-2'>Downlink Speed:</h3> 
                                {
                                    connectionData.downlink > 15 ?
                                        <h4 className='good p-1'> {connectionData.downlink} Mbps (High Quality)</h4>
                                            : connectionData.downlink > 9 ? 
                                                <h4 className='average p-1'> {connectionData.downlink} Mbps (Average Quality)</h4>
                                                : <h4 className='poor p-1'> {connectionData.downlink} Mbps (Poor Quality)</h4>
                                }  
                            </Row>
                            <Row className='p-3'>
                                <h3 className='px-2'>Uplink Speed:</h3> 
                                {
                                    connectionData.uplink > 15 ?
                                        <h4 className='good p-1'> {connectionData.uplink} Mbps (High Quality)</h4>
                                            : connectionData.uplink > 9 ? 
                                                <h4 className='average p-1'> {connectionData.uplink} Mbps (Average Quality)</h4>
                                                : <h4 className='poor p-1'> {connectionData.uplink} Mbps (Poor Quality)</h4>
                                }  
                            </Row>
                        </Col> 
                        <Col> 
                            <span className='title py-4'>Round Trip Time</span>  
                            <h5 className='p-1'>
                                The time it takes your device to send a signal to a server (or satellite) and recieve acknowledgement that the signal was received.
                            </h5>
                            <span className='title py-4'>Downlink Speed</span>
                            <h5 className='p-1'> 
                                The time is takes for your device to recieve acknowledgement from a server (or satellite) in megabits per second.
                            </h5>
                            <span className='title py-4'>Uplink Speed</span>
                            <h5 className='p-1'> 
                                The time is takes for your device to send a signal to a server (or satellite) in megabits per second.
                            </h5>
                        </Col>
                    </Row>
                    : null
                }
                <Row className='p-4'>
                    <Col className='text-center p-3'>
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
