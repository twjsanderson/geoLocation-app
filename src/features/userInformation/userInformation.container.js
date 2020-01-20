import React, { useState } from 'react'
import { deviceDetect } from 'react-device-detect';

// components
import UserInformationView from './userinformation.component';
import { Button } from 'react-bootstrap';

const UserInformation = () => {
    const [userData, setUserData] = useState({});
        const getUserData = () => {
            let device = deviceDetect();
            let dataObject = { 
                osName: device.osName,
                osVersion: device.osVersion
            }
            setUserData(dataObject);
        }
    return (
        <section id="userinformation-view">
            <h1>user container</h1>
            <h1>{userData.osName}</h1>
            <h1>{userData.osVersion}</h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <Button
                onClick={() => getUserData()}    
            >
            CLick it
            </Button>
            <UserInformationView />
        </section>
    )
}

export default UserInformation;