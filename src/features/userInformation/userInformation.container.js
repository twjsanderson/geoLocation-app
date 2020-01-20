import React, { useState } from 'react'
import { 
    deviceDetect,
    osName,
    osVersion,
    browserVersion,
    mobileVendor,
    mobileModel,
    engineName,
    deviceType
} from 'react-device-detect';

// components
import UserInformationView from './userinformation.component';

const UserInformation = () => {
    const [userData, setUserData] = useState({});
    const [mobileData, setMobileData] = useState({});

        const getUserData = () => {
            let device = deviceDetect();
            let dataObject = { 
                osName: osName,
                osVersion: osVersion,
                browserName: device.browserName,
                browserVersion: browserVersion,
                engineName: engineName,
                deviceType: deviceType
            };
            let mobileObject = {
                mobileModel, mobileVendor
            }
            setUserData(dataObject);
            setMobileData(mobileObject);
        }

        const clearData = () => {
            setUserData({});
            setMobileData({});
        };

    return (
        <section id="userinformation">
            <UserInformationView
                userData={userData}
                mobileData={mobileData}
                getUserData={getUserData}
                clearData={clearData}
            />
        </section>
    );
};

export default UserInformation;