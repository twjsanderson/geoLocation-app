import React from 'react';
import { Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <section id='about'>
            <Row>
                <Col className='text-center'>
                    <h1>About</h1>
                </Col>
            </Row>
            <Row>
                <Col className=''>
                    <h2>Tom Sanderson</h2>
                    <h3>Web Developer</h3>
                    <p>I came up with an the idea to build a simple online learning platform after learning about the 2019 Cambridge Analytica </p>
                </Col>
            </Row>


        </section>
    )
}

export default About;
