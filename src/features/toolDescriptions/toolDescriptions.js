import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { faQuestionCircle, faUsers, faWrench } from '@fortawesome/free-solid-svg-icons';

// components
import ToolDescription from './toolDescription';

const ToolDescriptions = (props) => {
    const { title, description, how, who, why, style } = props;

    return (
        <section id='tool-decriptions'>
            <Row className='text-center'>
                <Col className='p-4'>
                    <h1 className='text-dark'>
                        {title}
                    </h1>
                    <h4 className='description p-4'>
                        {description}
                    </h4>
                </Col>
            </Row>
            <Row>
                <ToolDescription 
                    style={style}
                    faIcon={faWrench}
                    detail={how}
                    title={'How is this data accessed?'}
                />
                <ToolDescription 
                    style={style}
                    faIcon={faUsers}
                    detail={who}
                    title={'Who uses this data?'}
                />
                <ToolDescription 
                    style={style}
                    faIcon={faQuestionCircle}
                    detail={why}
                    title={'Why is this data accessed?'}
                />
            </Row>
        </section>
    )
};

export default ToolDescriptions;
