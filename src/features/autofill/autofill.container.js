import React, { useState } from 'react'

// components 
import AutoFillView from './autofill.component'; 

const AutoFill = () =>  {
    const [autoFill, setAutoFill] = useState(null);

    const getAutoFill = () => {
        
    };

    const clearAutoFill = () => {
        setAutoFill(null);
    };

    return (
        <section id='Protocol'>
            <AutoFillView 
                autoFill={autoFill}
                getAutoFill={getAutoFill}
                clearAutoFill={clearAutoFill}
            />
        </section>
    )
}

export default AutoFill;
