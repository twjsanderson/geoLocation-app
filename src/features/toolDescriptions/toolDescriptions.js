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
                <Col className='p-2'>
                    <h1>
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
                />
                <ToolDescription 
                    style={style}
                    faIcon={faUsers}
                    detail={who}
                />
                <ToolDescription 
                    style={style}
                    faIcon={faQuestionCircle}
                    detail={why}
                />
            </Row>
        </section>
    )
};

export default ToolDescriptions;
