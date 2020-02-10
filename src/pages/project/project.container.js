import React from 'react';
import { Container } from 'react-bootstrap';

// components
import ProjectView from './project.component';

const Project = () => {
    return (
        <section id='project'>
            <Container>
                <ProjectView />
            </Container>
        </section>
    )
}

export default Project;
