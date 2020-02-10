import React, { useState } from 'react'
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import './index.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        const data = { email, message };
      
        Axios.post('https://us-central1-browser-power.cloudfunctions.net/submit', data).catch(error => {
          if (error) { 
            setError(error);
          }
        });

        if (error) {
            setSuccess(false)
        } else {
            setSuccess(true);
            setEmail('');
            setMessage('');
        }

    };

    return (
        <section id='contact'>
            <Container>
                <Row>
                    <Col className='text-center p-3'>
                        <h1>Contact</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center p-3'>
                        <h3>Have questions? Interested in learning more about Browser Power?</h3>
                        <h3 className='p-2'>Send us a message.</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className='h-100 text-center p-3'>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <Row>
                                <Col>
                                    <label>
                                        <h4><strong>Email</strong></h4>
                                        <input 
                                            required
                                            type='email' 
                                            name='email' 
                                            size='35'
                                            value={email} 
                                            onChange={e => setEmail(e.target.value)} 
                                        />
                                    </label>
                                </Col>
                            </Row>
                            <Row className='m-4'>
                                <Col>
                                    <label>
                                        <h4><strong>Message</strong></h4>
                                        <textarea
                                            required
                                            rows='5' 
                                            cols='55'
                                            type='text' 
                                            name='message' 
                                            value={message} 
                                            onChange={e => setMessage(e.target.value)} 
                                        />
                                    </label>
                                    <br />
                                    <input 
                                        className='tool-button rounded'
                                        type='submit' 
                                        value='submit' 
                                    />
                                    {
                                        error && success === false ? 
                                            <h5 className='text-red p-2'>
                                                <FontAwesomeIcon 
                                                    icon={faTimesCircle} 
                                                    color='red' 
                                                /> 
                                                Oops looks like there was an error. Please try again.
                                            </h5> 
                                            : success === true ?
                                                <h5 className='text-green p-2'>
                                                    <FontAwesomeIcon 
                                                        icon={faCheckCircle} 
                                                        color='green' 
                                                    /> 
                                                    Success! Your message was sent.
                                                </h5> 
                                                : null
                                    }
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Contact;
