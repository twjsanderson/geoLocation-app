import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navagation = () => {
    return (
        <section id="navbar">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link to="/">
                        GeoAccess
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link to="/resources">
                                Learn More
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">
                                About Us
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/project">
                                The Open Door Security Project
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    )
};

export default Navagation;