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
                    <Col className=''> 
                        { date ? <h4>You landed on this page on: {date}</h4> : null }
                        {
                            showData === true ? (
                                <>
                                    <h4>You came to this site from: {referrer}</h4>
                                    <h4>This tool has been open for: {minutes} mins : {seconds} secs</h4>
                                    <h4>You have clicked the tracking button: {trackingData} time(s) in the time example.</h4>
                                </>
                                ) : null
                        }
                    </Col>
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