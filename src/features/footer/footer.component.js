import React from 'react'
import { Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterView = () => {
    return (
        <section id='footer-view'>
            <Navbar expand="lg" bg="dark" variant="dark">
                <Row className='mx-auto text-center'>
                    <Nav>
                        <Link className="nav-link p-2" to="/privacy">
                            Privacy
                        </Link>
                        <Link className="nav-link p-2" to="/termsandconditions">
                            Terms And Conditions
                        </Link>
                        <Link className="nav-link p-2" to="/contact">
                            Contact Us
                        </Link>
                    </Nav>
                </Row>
            </Navbar>
        </section>

    );
};

export default FooterView;