import React, { useState, useEffect } from 'react'
import { Element } from 'react-scroll';

import './index.css'

// components
import HomeView from './home.component';

// features
import Intro from '../../features/Intro/Intro';
import GetLocation from '../../features/getLocation';
import UserInformation from '../../features/userInformation';
import Connection from '../../features/connection';
import Languages from '../../features/languages';
import TimeOnPage from '../../features/timeOnPage';

const Home = () => {
    const [landingTime, setLandingTime] = useState(null);

    useEffect(() => {
        setLandingTime(new Date().toString()); // date & time user landed on page
    }, [])
    

    return (
        <section id='home'>
                <HomeView />
                <Intro />
                <Element name="firstTool"></Element>
                <GetLocation />
                <UserInformation />
                <Connection />
                <Languages />
                <TimeOnPage landingTime={landingTime} />
        </section>
    )
}

export default Home;
