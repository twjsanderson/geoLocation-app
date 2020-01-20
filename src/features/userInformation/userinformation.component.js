import React from 'react'
import { Button } from 'react-bootstrap';

const UserInformationView = (props) => {
    const { userData, mobileData, getUserData, clearData } = props;

    return (
        <section id="userinformation-view">
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
        </section>
    );
};

export default UserInformationView;