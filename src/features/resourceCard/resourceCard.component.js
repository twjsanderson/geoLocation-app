import React from 'react';
import './index.css';

const ResourceCard = (props) => {
    const { resource } = props;
    
    return (
        <section id='resource-card'>
            <h3 className='resource-title'>{resource.title}</h3>
            <a className='pt-3'href={resource.address}>
                <img
                    src={resource.imageAddress}
                    alt={resource.alt}
                    className='img-responsive fit-image'
                />
            </a>
            <h4 className='my-4 p-1'>{resource.details}</h4>
            <a className='text-left' href={resource.ref}><p>{resource.refText}</p></a>
        </section>
    )
}

export default ResourceCard;
