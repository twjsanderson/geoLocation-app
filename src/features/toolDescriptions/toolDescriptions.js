import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faUsers, faWrench } from '@fortawesome/free-solid-svg-icons'

const ToolDescriptions = (props) => {
    const { title, description, how, who, why } = props;

    return (
        <section id='tool-decriptions'>
            <Row className='text-center'>
                <Col className='p-2'>
                    <h1>
                        {title}
                    </h1>
                    <h4 className='p-4'>
                        {description}
                    </h4>
                </Col>
            </Row>
            <Row className='text-center'>
                <Col className='m-4 bg-white rounded'>
                    <FontAwesomeIcon 
                        icon={faWrench}
                        size='6x'
                        className='p-4'
                    />
                    <p className='p-3'>
                        {how}
                    </p>
                </Col>
                <Col className='m-4 bg-white rounded'>
                    <FontAwesomeIcon 
                        icon={faUsers}
                        size='6x'
                        className='p-4'
                    />
                    <p className='p-3'>
                        {who} 
                    </p>
                </Col>
                <Col className='m-4 bg-white rounded'>
                    <FontAwesomeIcon 
                        icon={faQuestionCircle}
                        size='6x'
                        className='p-4'
                    />
                    <p className='p-3'>
                        {why}
                    </p>
                </Col>
            </Row>
        </section>
    )
};

export default ToolDescriptions;
