import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ToolDescription = (props) => {
    const { style, faIcon, detail } = props;
    return (
        <Col className={style}>
            <FontAwesomeIcon 
                icon={faIcon}
                size='6x'
                className='p-4'
            />
            <p className='p-3'>
                {detail}
            </p>
        </Col>
    );
};

export default ToolDescription;