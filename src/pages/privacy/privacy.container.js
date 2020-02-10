import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';

const Privacy = () => {
    return (
        <section id='privacy'>
            <Container>
                <Row>
                    <Col className='text-center p-3'>
                        <h1>Privacy</h1>                     
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center p-3'>
                        <p>
                            The Browser Power tools <strong>do not </strong>collect, store or analyze your personal data for any reason. This application pulls data stored in your browser that
                            is freely and legally available, for strictly educational purposes.
                        </p>    
                        <p>
                            On our <Link to='/contact'>Contact Page</Link> you can send us a message with any questions or concerns you might have. 
                            Your <strong>email address</strong> and the <strong>content</strong> of your message will never be shared with anyone else. 
                            That information will never be used for sales, marketing or data analysis purposes. 
                        </p>                
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Privacy;
