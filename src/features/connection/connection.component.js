import React from 'react'
import { Button } from 'react-bootstrap';


const ConnectionView = (props) => {
    const { connectionData, getConnectionData, clearConnectionData } = props;
    return (
        <section id='connection-view'>
            {
                connectionData !== null ?
                    <>
                        <h1>Network Type: {connectionData.networkType}</h1>
                        <h1>Approximate Bandwith: {connectionData.approxBandwith} Megabits per Second</h1>
                    </> 
                    : null
            }
            <Button 
                onClick={() => getConnectionData()}
            >
                Show Connection Info
            </Button>
            <Button
                onClick={() => clearConnectionData()}
            >
                Clear Connection Information
            </Button>
        </section>
    )
}

export default ConnectionView;
