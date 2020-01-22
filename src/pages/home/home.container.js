import React from 'react'
import './index.css'

// components
import HomeView from './home.component';

// features
import GetLocation from '../../features/getLocation';
import UserInformation from '../../features/userInformation';
import Connection from '../../features/connection';
import Languages from '../../features/languages';
import AutoFill from '../../features/autofill';
import TimeOnPage from '../../features/timeOnPage';

const Home = () => {    
    return (
        <section id='home'>
            <HomeView />
            <GetLocation />
            <UserInformation />
            <Connection />
            <Languages />
            <AutoFill />
            <TimeOnPage />
        </section>
    )
}

export default Home;
