import React from 'react'

// components
import HomeView from './home.component';
import GetLocation from '../../features/getLocation';
import UserInformation from '../../features/userInformation';
import Connection from '../../features/connection/connection.container';

const Home = () => {    
    return (
        <section id='home'>
            <HomeView />
            <GetLocation />
            <UserInformation />
            <Connection />
        </section>
    )
}

export default Home;
