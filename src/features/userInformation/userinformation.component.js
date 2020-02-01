import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';
import browserImages from '../../constants/browserImages';
import osImages from '../../constants/osImages';

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
                        {
                            Object.keys(browserImages).map((key, index) => {
                                return key === userData.browserName ?
                                    <img 
                                        src={browserImages[key]}
                                        alt='key'
                                        key={index}
                                        className='image'
                                    />
                                    : null
                            })
                        }
                    </Col>
                    <Col md={3}>
                        {
                            Object.keys(osImages).map((key, index) => {
                                return key === userData.osName ?
                                    <img 
                                        src={osImages[key]}
                                        alt='key'
                                        key={index}
                                        className='image'
                                    />
                                    : null
                            })
                        }
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