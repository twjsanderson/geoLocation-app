import React, { forwardRef } from 'react'
import { Tooltip } from 'react-bootstrap';

const ToolTip = forwardRef((props, ref) => {
    return (
        <Tooltip 
            ref={ref} 
            {...props}
        >
            {props.title}
        </Tooltip>
    )
});

export default ToolTip;
