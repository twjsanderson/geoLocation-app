import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';


const ConnectionView = (props) => {
    const { connectionData, getConnectionData, clearConnectionData } = props;
    return (
        <section id='connection-view'>
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
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ConnectionView;
