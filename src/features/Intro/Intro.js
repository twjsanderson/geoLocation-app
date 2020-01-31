import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './index.css';

// TODO: put disclaimer as pop up!

const Intro = () => {
    return (
        <section id='intro'>
            <Container>
                <Row>
                    <Col className='text-center p-3'>
                        <h2 className='p-3'>
                            Data Privacy and Your Browser
                        </h2>
                        <p>
                            Have you ever wondered how websites and mobile apps collect information about you?
                        </p>
                        <p>
                            Through a series of easy to use tools, Browser Power will help you answer this question. 
                            Each tool is built to showcase what kind of information your browser collects about you 
                            and your computer system.
                        </p>
                        <p>
                            Every tool is accompanied by an explanantion of how your data was collected, how it could 
                            be analyzed, sold and used by a company or hacker.
                        </p>
                   </Col>
                </Row>
            </Container>
            {/* <Row>
                <Col className='disclaimer text-center p-3'>
                    <Container>
                            <p className='disclaimer-title text-danger'>
                                Disclaimer:
                            </p> 
                            <p className='disclaimer-text'>
                            Any information pulled from your browser is NEVER collected, stored or 
                            analyzed in any form. It is only displayed on your system for strictly educational 
                            purposes.
                        </p>
                    </Container>
                </Col>
            </Row> */}
        </section>
    )
};

export default Intro;
