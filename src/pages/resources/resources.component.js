import React from 'react';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import ResourceCard from '../../features/resourceCard/resourceCard.component';

const ResourcesView = (props) => {
    const resources = props.resources.resources;

    return (
        <section id='resources-view'>
            <Container>
                <Row className='h-100'>
                    <Col className='text-center p-3'>
                        <h1>Resources</h1>
                    </Col>
                </Row>
                <Row className='resource-box rounded'>
                    <Col className='text-center my-3 p-4'>
                        <h2 className='p-3'>Interested in learning more about data privacy?</h2>
                        <h3 className='p-1'>Here are some resources to get you started.</h3>
                        <FontAwesomeIcon 
                            icon={faChevronDown} 
                            className='arrow mt-4'
                        />
                    </Col>
                </Row>
                </Container>
                <Container fluid className='h-100'>
                    <Row className='h-100 justify-content-center p-4'>
                        {
                            resources.map((resource, index) => {
                                return index < 3 ?
                                    <Col md={3} className='resource-col m-3 p-4 rounded'>
                                        <ResourceCard 
                                            key={index}
                                            resource={resource}
                                        />
                                    </Col>
                                    : null
                            })
                        }
                    </Row>
                    <Row className='h-100 justify-content-center p-4'>
                        {
                            resources.map((resource, index) => {
                                return index > 2 ?
                                    <Col md={3} className='resource-col m-3 p-4 rounded'>
                                        <ResourceCard 
                                            key={index}
                                            resource={resource}
                                        />
                                    </Col>
                                    : null
                            })
                        }
                    </Row>
                </Container>
        </section>
    )
}

export default ResourcesView;
