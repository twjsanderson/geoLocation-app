import React from 'react'
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import './index.css';

const AutoFillView = (props) =>  {
    const { 
        style,
        showFields,
        closeForm 
    } = props;

    return (
        <section id='autofill-view'>
            <Container>
                <Row className='text-center'>
                    <Col className='p-2'>
                        <h1>
                            Autofill Hack
                        </h1>
                        <h4 className='p-4'>
                            This tool uses the browser to find your location on a map with your current 
                            latitude and longitude.
                        </h4>
                        <h3>How?</h3>
                        <p>
                            Using something called the Browser Object Model (or BOM), developers can 
                            get the latitude and longitude of a device or computer that navigates 
                            to their website. If you want to try this yourself check out our free 
                            exercise page here: <br /> Exercise #1 
                        </p>
                        <h3>Who?</h3>
                        <p>
                            This technique (and many variations of it) are used all over the internet 
                            by small businesses, large corporations, hackers, governments agencies 
                            and personal websites. 
                        </p>
                        <h3>Why?</h3>
                        <p>
                            Geo location tracking is usually employed by businesses who want to learn 
                            more about their customers, help them find physical storefronts and make 
                            it easier to connect users with relevant content. This functionality helps 
                            developers do everything from track user engagement to find out where people 
                            live! 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form autoComplete='true'>
                            <Container>
                                <Form.Group controlId='formBasicEmail'>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type='email' 
                                        placeholder='Enter email'
                                    />
                                </Form.Group>
                            </Container>
                            <Container className={style}>
                                <Form.Group className={style} controlId='formName'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='text' name='name' />
                                </Form.Group>

                                <Form.Group className={style} controlId='formAddress'>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type='text' name='address' />
                                </Form.Group>

                                <Form.Group className={style} controlId='formPostalCode'>
                                    <Form.Label>Postal Code</Form.Label>
                                    <Form.Control type='text' name='postalCode' />
                                </Form.Group>

                                <Form.Group className={style} controlId='formProvince'>
                                    <Form.Label>Province/State</Form.Label>
                                    <Form.Control type='text' name='province' />
                                </Form.Group>

                                <Form.Group className={style} controlId='formCountry'>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type='text' name='country' />
                                </Form.Group>

                                <Form.Group className={style} controlId='formTelephone'>
                                    <Form.Label>Telephone</Form.Label>
                                    <Form.Control type='text' name='telephone' />
                                </Form.Group>

                                <Form.Group className={style} controlId='formCreditCardNumber'>
                                    <Form.Label>Credit Card Number</Form.Label>
                                    <Form.Control type='text' name='cc-number' />
                                </Form.Group>

                                <Form.Group className={style} controlId='formCreditCardExpiry'>
                                    <Form.Label>Credit Card Expiry</Form.Label>
                                    <Form.Control type='number' name='cc-exp' />
                                </Form.Group>
                            </Container>  
                        </Form>
                    </Col>
                </Row>    
                <Row>
                    <Col className='text-center pb-3'>
                        <Button
                            className="mt-4 tool-button"
                            onClick={() => showFields()}
                        >
                            Show Results
                        </Button>

                        <Button
                            className="mt-4 tool-button"
                            onClick={() => closeForm()}
                        >
                            Hide Results
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AutoFillView;
