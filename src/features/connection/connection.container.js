import React, { useState } from 'react'

// components
import ConnectionView from './connection.component';

const Connection = () => {
    const [connectionData, setConnectionData] = useState(null);
    
    const getConnectionData = () => {
        let data = window.clientInformation.connection;
        let connectionObject = {
            networkType: data.effectiveType,
            downlink: data.downlink,
            uplink: data.downlink,
            roundTrip: data.rtt
        };
        setConnectionData(connectionObject)
    };

    const clearConnectionData = () => {
        setConnectionData(null);
    }

    return (
        <section id='connection'>
            <ConnectionView
                connectionData={connectionData}
                getConnectionData={getConnectionData}
                clearConnectionData={clearConnectionData}
            />
        </section>
    )
}

export default Connection;
