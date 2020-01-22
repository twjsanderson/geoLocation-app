import React, { useState } from 'react'
import Timer from 'react-compound-timer';
import track from 'react-tracking';

// components
import TimeOnPageView from './timeOnPage.component';
import TrackingButton from '../trackingButton/trackingButton';

const TimeOnPage = () => {
    const [date, setDate] = useState(null);
    const [trackingData, setTrackingData] = useState(null);

    const showTime = () => {
        const today = new Date();
        setDate(today.toDateString());
        setTrackingData(window.dataLayer.length);
    };

    const clearTime = () => {
        setDate(null);
        setTrackingData(0);
    };

    return (
        <section id='loginStatus'>
            <TimeOnPageView 
                seconds={
                    <Timer>
                        <Timer.Seconds />
                    </Timer>
                }
                minutes={
                    <Timer>
                        <Timer.Minutes />
                    </Timer>
                } 
                track={
                    <TrackingButton 
                        name={'track'}
                        alt={'tracking button'}
                        fn={showTime}
                    />
                }
                clearTime={clearTime} 
                date={date} 
                trackingData={trackingData}
            />
            
            
        </section>
    )
}

export default track({
        page: 'TimeOnPage',
    }, 
    { 
        dispatch: data => {
        (window.dataLayer = window.dataLayer || []).push(data);
    }
})(TimeOnPage);