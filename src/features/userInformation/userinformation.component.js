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

    const blueStyle = { style: 'm-4 bg-secondary text-center rounded' };

    return (
        <section id="userinformation-view">
            <Container>
                <ToolDescriptions 
                    title={content.title}
                    description={content.description}
                    how={content.how}
                    who={content.who}
                    why={content.why}
                    style={blueStyle.style}
                />
                <Row className='h-100 justify-content-center align-items-center bg-secondary rounded'>
                    <Col md={5} className='text-left'>
                        {
                            userData.osName && userData.browserName ?
                                <div className='p-3'>
                                    <Row>
                                        <h3 className='px-2'>Device Type:</h3> <h4 className='text-white p-1'> {userData.deviceType === 'browser' ? 'Computer/Laptop' : userData.deviceType}</h4>
                                    </Row>
                                    <Row>
                                        <h3 className='px-2'>Operating System:</h3> <h4 className='text-white p-1'> {userData.osName}</h4>
                                    </Row>
                                    <Row>
                                        <h3 className='px-2'>Operating System Version:</h3> <h4 className='text-white p-1'> {userData.osVersion}</h4>
                                    </Row>
                                    <Row>
                                        <h3 className='px-2'>Browser Name:</h3> <h4 className='text-white p-1'> {userData.browserName}</h4>
                                    </Row>
                                    <Row>
                                        <h3 className='px-2'>Browser Version:</h3> <h4 className='text-white p-1'> {userData.browserVersion}</h4>
                                        </Row>
                                    <Row>
                                        <h3 className='px-2'>Browser Engine Name:</h3> <h4 className='text-white p-1'> {userData.engineName}</h4>
                                    </Row>
                                </div>
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