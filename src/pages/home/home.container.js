import React from 'react'

// components
import HomeView from './home.component';
import GetLocation from '../../features/getLocation';
import UserInformation from '../../features/userInformation';

const Home = () => {    
    return (
        <section id='home'>
            <HomeView />
            <GetLocation />
            <UserInformation />
        </section>
    )
}

export default Home;
