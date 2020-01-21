import React, { useState } from 'react'

// components 
import AutoFillView from './autofill.component'; 

const AutoFill = () =>  {
    const [email, setEmail] = useState('');
    const [style, setStyle] = useState('hidden');

    const HandleChange = (e) => {
        setEmail(e.target.value);
    };

    const ShowFields = () => {
        setStyle('')
    };

    const ClearForm = () => {
        setEmail('');
    };

    return (
        <section id='Protocol'>
            <AutoFillView 
                email={email}
                HandleChange={HandleChange}
                style={style}
                ShowFields={ShowFields}
                ClearForm={ClearForm}
            />
        </section>
    )
}

export default AutoFill;
