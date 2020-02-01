import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';

const TimeOnPageView = (props) => {
    const { trackingButton, clearTime, date, seconds, minutes, trackingData, referrer, showData } = props;

    return (
        <section id='timeonpage-view'>
            <Container>
                <Row className='text-center'>
                    <Col className='p-2'>
                        <h1>
                            Time On Page
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
                    <Col>
                        {date}
                        {
                            showData === true ? (
                                <>
                                    <h1>You came to this site from: {referrer}</h1>
                                    <h1>You have opened the time example for {minutes} mins : {seconds} secs</h1>
                                    <h1>You have clicked the tracking button: {trackingData} time(s) in the time example.</h1>
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
                            Clear Time
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TimeOnPageView;