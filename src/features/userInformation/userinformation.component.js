import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './index.css';

// constants
import browserImages from '../../constants/browserImages';
import osImages from '../../constants/osImages';
import systemContent from '../../constants/toolInformation';

// components
import ImageDisplay from '../imageDisplay';
import ToolDescriptions from '../toolDescriptions';

const content = systemContent.systemContent;

const UserInformationView = (props) => {
    const { userData, mobileData, getUserData, clearData } = props;

    return (
        <section id="userinformation-view">
            <Container>
                <ToolDescriptions 
                    title={content.title}
                    description={content.description}
                    how={content.how}
                    who={content.who}
                    why={content.why}
                />
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