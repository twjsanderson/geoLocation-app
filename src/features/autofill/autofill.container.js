import React, { useState } from 'react'

// components 
import AutoFillView from './autofill.component'; 

const AutoFill = () =>  {
    const [style, setStyle] = useState('hidden');

    const showFields = () => {
        setStyle('');
    };

    const closeForm = () => {
        setStyle('hidden');
    };

    return (
        <section id='autofill'>
            <AutoFillView 
                style={style}
                showFields={showFields}
                closeForm={closeForm}
            />
        </section>
    )
}

export default AutoFill;
