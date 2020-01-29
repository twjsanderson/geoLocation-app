import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';

const UserInformationView = (props) => {
    const { userData, mobileData, getUserData, clearData } = props;

    return (
        <section id="userinformation-view">
            <Container>
                <Row>
                    <Col>
                    <h1>Title</h1>
                    <h3>details about section</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            userData.osName && userData.browserName ?
                                <>
                                    <h1>OS: {userData.osName}</h1>
                                    <h1>OS Version: {userData.osVersion}</h1>
                                    <h1>Browser Name: {userData.browserName}</h1>
                                    <h1>Browser Version: {userData.browserVersion}</h1>
                                    <h1>Browser Engine Name: {userData.engineName}</h1>
                                    <h1>Device Type: {userData.deviceType}</h1>
                                </>
                                : null
                        }
                        {
                            userData.deviceType === 'mobile' ?
                                <>
                                    <h1>{mobileData.mobileModel}</h1>
                                    <h1>{mobileData.mobileVendor}</h1> 
                                </> 
                                : null
                        }
                        <Button
                            onClick={() => getUserData()}    
                        >
                            Show User Information
                        </Button>
                        <Button
                            onClick={() => clearData()}
                        >
                            Clear User Information
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default UserInformationView;