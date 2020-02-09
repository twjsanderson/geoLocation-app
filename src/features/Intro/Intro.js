import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css';

const Intro = () => {
    return (
        <section id='intro'>
            <Container fluid>
                <Row>
                    <Col className='text-center p-3'>
                        <h1 className='p-3'>
                            Data Privacy and Your Browser
                        </h1>
                        <h2 className='p-3'>
                            Have you ever wondered how websites and mobile apps collect your personal information? 
                            Through a series of easy to use tools, Browser Power will help you answer this question.
                        </h2>
                   </Col>
                </Row>
                <Row className='p-1'>
                    <Col className='intro-col'>
                        <h2 className='text-center'>Are these tools easy to build?</h2>
                        <h4 className='text-center p-3'> 
                            Yes! Each tool is built with free, open source software and contain brief descriptions of 
                            how the underlying technologies are used by web developers, businesses &amp; hackers in the real world. 
                        </h4>
                    </Col>
                    <Col className='intro-col'>
                        <h2 className='text-center'>Disclaimer</h2>
                        <h4 className='text-center p-3'>
                            This app does NOT collect or store any of your personal data. Each tool displays
                            publicly accessible information found inside your browser. This application was built for
                            strcitly educational purposes. 
                        </h4>
                    </Col>
                    <Col className='intro-col'>
                        <h2 className='text-center'>Can I stop websites from collecting my data?</h2>
                        <h4 className='text-center p-3'>
                            Yes and No. By going into the settings of your browser you can turn off certain tracking
                            features such as your geolocation coordinates. <a href='https://www.pocket-lint.com/gadgets/news/129779-how-to-see-who-s-tracking-you-online-and-stop-them-easily-why-give-away-your-data-for-free'>Check out this guide to learn more</a>. The downside 
                            is that some of your favourite websites use these features to function properly. Not every site that collects your data is malicious.
                        </h4>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Intro;
