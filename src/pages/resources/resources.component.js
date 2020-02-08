import React from 'react';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// components
import ResourceCard from '../../features/resourceCard/resourceCard.component';

const ResourcesView = (props) => {
    const resources = props.resources.resources;

    return (
        <section id='resources-view'>
            <Container fluid className='top p-5'>
                <Row className='p-3'>
                    <Col className='text-center'>
                        <h1>Resources</h1>
                    </Col>
                </Row>
                <Row className='resource-box rounded'>
                    <Col className='text-center p-3'>
                        <h2 className='p-3'>Interested in learning more about data privacy?</h2>
                        <h4>Here are some resources to get you started.</h4>
                        <FontAwesomeIcon 
                            onClick={() => props.goToArticles()}
                            icon={faChevronDown} 
                            className='arrow m-5'
                        />
                    </Col>
                </Row>
            </Container>
            <Container fluid className='h-100'>
                {props.element}
                <Row className='h-100 justify-content-center p-4'>
                    {
                        resources.map((resource, index) => {
                            return index < 3 ?
                                <Col md={3} key={index} className='resource-col m-5 rounded'>
                                    <ResourceCard 
                                        
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
                                <Col md={3} key={index} className='resource-col m-5 rounded'>
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
