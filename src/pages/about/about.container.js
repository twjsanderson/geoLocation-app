import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// components
import AboutView from './about.component';

const About = () => {
    return (
        <section id='about'>
            <Container>
                <Row>
                    <Col className='text-center p-2'>
                        <h1>About</h1>
                    </Col>
                </Row>
                <AboutView />
            </Container>
        </section>
    )
}

export default About;
