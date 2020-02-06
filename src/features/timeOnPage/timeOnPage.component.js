import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';

// constants
import trackingContent from '../../constants/toolInformation';

// components
import ToolDescriptions from '../toolDescriptions';

const TimeOnPageView = (props) => {
    const { trackingButton, clearTime, date, seconds, minutes, trackingData, referrer, showData } = props;
    const content = trackingContent.trackingContent;
    const whiteStyle = { style: 'm-4 bg-white text-center rounded' };

    return (
        <section id='timeonpage-view'>
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
                        showData && date ?
                            <Col className='bg-white rounded p-3'> 
                            <>
                                    <Row className='p-2'>
                                        <h3>You opened this page on:</h3> 
                                        <h3 className='px-1 text-primary'>{date}</h3>
                                    </Row>
                                        <Row className='p-2'>
                                            <h3>You came to this site from:</h3> 
                                            <h3 className='px-1 text-primary'>{referrer}</h3>
                                        </Row>
                                        <Row className='p-2'>
                                            <h3>This tool has been open for:</h3> 
                                            <h3 className='px-1 text-primary'>{minutes} mins : {seconds} secs</h3>
                                        </Row>
                                        <Row className='p-2'>
                                            <h3>You have clicked the <strong>Show Tracking Information</strong> button:</h3> 
                                            <h3 className='px-1 text-primary'>{trackingData} time(s)</h3>
                                        </Row>
                                    </>
                            </Col>
                            : null
                    }
                </Row>
                <Row>
                    <Col className='text-center pb-3'>
                        {trackingButton}
                        <Button
                            className='tool-button'
                            onClick={() => clearTime()}
                        >
                            Clear Tracking Information
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TimeOnPageView;