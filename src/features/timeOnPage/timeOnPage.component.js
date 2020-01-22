import React from 'react'
import { Button } from 'react-bootstrap';

const TimeOnPageView = (props) => {
    const { track, clearTime, date, seconds, minutes, trackingData } = props;
    return (
        <section id='timeonpage-view'>
            {date}
                {
                    trackingData > 0 ? (
                        <>
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
        </section>
    )
}

export default TimeOnPageView;