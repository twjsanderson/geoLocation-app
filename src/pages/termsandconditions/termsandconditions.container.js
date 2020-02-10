import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css';

const TermsAndConditions = () => {
    return (
        <section id='termsandconditions'>
            <Container>
                <Row>
                    <Col className='text-center p-3'>
                        <h1>Terms And Conditions</h1>                     
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center p-3'>
                        <p>
                            Browser Power is a free application that may be used by anyone for strictly educational purposes. The code for this website and the tools
                            used within it are completely free to use and replicate without written permission from the developer. To view the code, check out
                            our <a href='https://github.com/twjsanderson/geoLocation-app'>Github repository</a>.
                        </p>               
                    </Col>
                </Row>
            </Container>
    </section>
    )
}

export default TermsAndConditions;
