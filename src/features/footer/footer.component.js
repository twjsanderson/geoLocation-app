import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterView = () => {
    return (
        <section id='footer-view'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className="p-2" to="/privacy">
                            Privacy
                        </Link>
                        <Link className="p-2" to="/termsandconditions">
                            Terms And Conditions
                        </Link>
                        <Link className="p-2" to="/contact">
                            Contact Us
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>

    );
};

export default FooterView;