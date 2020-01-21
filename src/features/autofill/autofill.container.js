import React, { useState } from 'react'

// components 
import AutoFillView from './autofill.component'; 

const AutoFill = () =>  {
    const [email, setEmail] = useState('');

    const HandleChange = (e) => {
        setEmail(e.target.value);
    };

    const ShowFields = () => {

    };

    const ClearForm = () => {
        setEmail('');
    };

    return (
        <section id='Protocol'>
            <AutoFillView 
                email={email}
                HandleChange={HandleChange}
                ClearForm={ClearForm}
            />
        </section>
    )
}

export default AutoFill;
