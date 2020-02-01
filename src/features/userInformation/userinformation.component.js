import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';

// constants
import browserImages from '../../constants/browserImages';
import osImages from '../../constants/osImages';

// components
import ImageDisplay from '../imageDisplay';

const UserInformationView = (props) => {
    const { userData, mobileData, getUserData, clearData } = props;

    return (
        <section id="userinformation-view">
            <Container>
                <Row className='text-center'>
                    <Col className='p-2'>
                        <h1>
                            System Identifier
                        </h1>
                        <h4 className='p-4'>
                            This tool uses the browser to identify your browser, Operating System and Device Type.
                        </h4>
                        <h3>How?</h3>
                        <p>
                            The Browser Object Model (or BOM) allows developers to access readily
                            available information about your personal device.
                        </p>
                        <h3>Who?</h3>
                        <p>
                            The BOM is an excellent tool for companies and hackers to assess the 
                            capabilities of a user's system.
                        </p>
                        <h3>Why?</h3>
                        <p>
                            Tech and marketing companies may value this information to assess 
                            their Browser or Operating System's current market share. This kind 
                            of business intelligence can be used to build sales strategies, change
                            marketing content and drive corporate acquisitions. It can also be 
                            used by hackers to find vulnerabilities in the specific model of a 
                            user's system.  
                        </p>
                    </Col>
                </Row>
                <Row className='h-100 justify-content-center align-items-center'>
                    <Col md={5} className='text-center'>
                        {
                            userData.osName && userData.browserName ?
                                <>
                                    <h4>Operating System: {userData.osName}</h4>
                                    <h4>Operating System Version: {userData.osVersion}</h4>
                                    <h4>Browser Name: {userData.browserName}</h4>
                                    <h4>Browser Version: {userData.browserVersion}</h4>
                                    <h4>Browser Engine Name: {userData.engineName}</h4>
                                    <h4>Device Type: {userData.deviceType === 'browser' ? 'Computer/Laptop' : userData.deviceType}</h4>
                                </>
                                : null
                        }
                        {
                            userData.deviceType === 'mobile' ?
                                <>
                                    <h4>Phone Model: {mobileData.mobileModel}</h4>
                                    <h4>Phone Vendor: {mobileData.mobileVendor}</h4> 
                                </> 
                                : null
                        }
                    </Col>
                    <Col md={3}>
                        <ImageDisplay 
                            images={browserImages}
                            item={userData.browserName}
                        />
                    </Col>
                    <Col md={3}>
                        <ImageDisplay 
                            images={osImages}
                            item={userData.osName}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center pb-3'>
                        <Button
                            className='tool-button'
                            onClick={() => getUserData()}    
                        >
                            Show System Information
                        </Button>
                        <Button
                            className='tool-button'
                            onClick={() => clearData()}
                        >
                            Clear System Information
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default UserInformationView;