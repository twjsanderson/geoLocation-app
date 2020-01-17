import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section id="footer">
             <Navbar fixed="bottom" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link>
                            <Link to="/privacy">
                                Privacy
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/termsandconditions">
                                Terms And Conditions
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    )
};

export default Footer;