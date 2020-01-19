import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationView = () => {
    return (
        <section id='navigation-view'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link className="p-2" to="/">
                    Browser Power
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="p-2" to="/">
                            Home
                        </Link>
                        <Link className="p-2" to="/resources">
                            Learn More
                        </Link>
                        <Link className="p-2" to="/about">
                            About Us
                        </Link>
                        <Link className="p-2" to="/project">
                            The Open Door Security Project
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};

export default NavigationView;