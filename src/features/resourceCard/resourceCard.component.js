import React from 'react';
import './index.css';

const ResourceCard = (props) => {
    const { resource } = props;
    
    return (
        <section id='resource-card'>
            <h3 className='resource-title'>{resource.title}</h3>
            <a href={resource.address}>
                <img
                    src={resource.imageAddress}
                    alt={resource.alt}
                    className='img-responsive fit-image'
                />
            </a>
            <p className='pt-4'>{resource.details}</p>
            <a className='text-center' href={resource.ref}><p>{resource.refText}</p></a>
        </section>
    )
}

export default ResourceCard;
