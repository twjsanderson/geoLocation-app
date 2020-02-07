import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const NavigationView = () => {
    return (
        <section id='navigation-view'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link className='p-2' to="/">
                    <FontAwesomeIcon 
                            icon={faPowerOff} 
                            size='3x'
                            color='#904BB4'
                            className='icon'
                        />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-link" to="/resources">
                            Resources
                        </Link>
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                        <Link className="nav-link" to="/project">
                            The Open Door Security Project
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};

export default NavigationView;