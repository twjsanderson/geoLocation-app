import React from 'react'
import ResourcesView from './resources.component';

// constants
import resources from '../../constants/resourceArticles.js';

const Resources = () => {
    return (
        <section id='resources'>
            <ResourcesView 
                resources={resources}
            />
        </section>
    )
};

export default Resources;
