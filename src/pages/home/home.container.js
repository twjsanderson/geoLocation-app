import React from 'react'

// components
import HomeView from './home.component';
import GetLocation from '../../features/getLocation';

const Home = () => {    
    return (
        <section id='home'>
            <HomeView />
            <GetLocation />
        </section>
    )
}

export default Home;
