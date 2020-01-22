import React from 'react'
import { Container, Button, Form } from 'react-bootstrap';
import './autofill.css';

const AutoFillView = (props) =>  {
    const { 
        style,
        showFields,
        closeForm 
    } = props;

    return (
        <section id='autofill-view'>
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

            <Button
                className="mt-4"
                onClick={() => showFields()}
            >
                Show Results
            </Button>

            <Button
                className="mt-4"
                onClick={() => closeForm()}
            >
                Hide Results
            </Button>
        </section>
    )
}

export default AutoFillView;
