import React, { useState } from 'react'
import Timer from 'react-compound-timer';
import track from 'react-tracking';

// components
import TimeOnPageView from './timeOnPage.component';
import TrackingButton from '../trackingButton/trackingButton';

const TimeOnPage = (props) => {
    const { landingTime } = props;
    const [date, setDate] = useState(null);
    const [trackingData, setTrackingData] = useState(null);
    const [referrer, setReferrer] = useState(null);
    const [showData, setShowData] = useState(false);

    const showTime = () => {
        setDate(landingTime);
        setTrackingData(window.dataLayer.length);
        setReferrer(window.document.referrer);
        setShowData(true);
    };

    const clearTime = () => {
        setDate(null);
        setShowData(false);
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
                trackingButton={
                    <TrackingButton 
                        name={'Show Tracking Information'}
                        alt={'Show Tracking Information'}
                        fn={showTime}
                    />
                }
                clearTime={clearTime} 
                date={date} 
                trackingData={trackingData}
                referrer={referrer}
                showData={showData}
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