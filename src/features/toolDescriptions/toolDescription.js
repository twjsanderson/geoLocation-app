import React from 'react';
import { Col, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ToolTip from '../tooltip/toolTip.js';

const ToolDescription = (props) => {
    const { style, faIcon, detail, title } = props;
    return (
        <Col className={style}>
            <OverlayTrigger
                placement='right'
                delay={{ show: 100, hide: 400 }}
                overlay={ <ToolTip title={title} />}
            >
                <FontAwesomeIcon 
                    icon={faIcon}
                    size='6x'
                    className='p-4'
                    style={{ cursor:'pointer' }}
                />
            </OverlayTrigger>
            <p className='p-3'>
                {detail}
            </p>
        </Col>
    );
};

export default ToolDescription;