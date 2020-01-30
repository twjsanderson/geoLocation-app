import React from 'react'
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

// TODO: add links to title and Get Started

const HomeView = () => {
    return (
        <section id='home-view'>
            <Container className='h-100'>
                <Row className='h-75 d-flex justify-content-center align-items-center'>
                    <Col lg={8}>
                        <h1 id='title'>
                            Browser 
                            <br /> 
                            Power
                        </h1>
                    </Col>
                    <Col lg={4} id='detail'>
                        <h2 className='py-2'>What is this?</h2>
                        <p>
                            A free educational tool designed to teach people how web developers and hackers
                            user web browsers to access their private data.
                        </p>
                    </Col>
                </Row>
                <Row className='h-25'>
                    <Col className='text-center arrow'>
                        <h3 className='arrow-title'>Get Started!</h3>
                        <FontAwesomeIcon 
                            icon={faChevronDown} 
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default HomeView;
