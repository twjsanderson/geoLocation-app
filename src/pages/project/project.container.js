import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// components
import ProjectView from './project.component';

const Project = () => {
    return (
        <section id='project'>
            <Container>
                <Row>
                    <Col className='p-3 text-center'>
                        <h1>The Open Door Security Project</h1>
                    </Col>
                </Row>
                <ProjectView />
            </Container>
        </section>
    )
}

export default Project;
