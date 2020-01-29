import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';

const TimeOnPageView = (props) => {
    const { track, clearTime, date, seconds, minutes, trackingData, referrer, showData } = props;
    return (
        <section id='timeonpage-view'>
            <Container>
                <Row>
                    <Col>
                    <h1>Title</h1>
                    <h3>details about section</h3>
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
                        {track}
                        <Button
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