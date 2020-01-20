import React from 'react'
import { Button, Form } from 'react-bootstrap';

const AutoFillView = (props) =>  {
    const { autoFill, getAutoFill, clearAutoFill } = props;
    return (
        <section id='protocol-view'>

            <Form autoComplete="true">
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='Enter email' 
                        onChange={(e) => this.handleChange(e, "email")}
                    />
                </Form.Group>

                <Form.Group controlId='formName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' name='name' />
                </Form.Group>

                <Form.Group controlId='formAddress'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text' name='address' />
                </Form.Group>

                <Form.Group controlId='formPostalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type='text' name='postalCode' />
                </Form.Group>

                <Form.Group controlId='formProvince'>
                    <Form.Label>Province/State</Form.Label>
                    <Form.Control type='text' name='province' />
                </Form.Group>

                <Form.Group controlId='formCountry'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='text' name='country' />
                </Form.Group>

                <Form.Group controlId='formTelephone'>
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type='text' name='telephone' />
                </Form.Group>

                <Form.Group controlId='formCreditCardNumber'>
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control type='text' name='cc-number' />
                </Form.Group>

                <Form.Group controlId='formCreditCardExpiry'>
                    <Form.Label>Credit Card Expiry</Form.Label>
                    <Form.Control type='number' name='cc-exp' />
                </Form.Group>

                <Button
                    onClick={() => clearAutoFill()}
                >
                    Clear AutoFill
                </Button>
            </Form>

            <Button
                onClick={() => getAutoFill()}
            >
                Show AutoFill
            </Button>
        </section>
    )
}

export default AutoFillView;
