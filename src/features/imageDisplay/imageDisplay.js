import React from 'react';
import './index.css';

const ImageDisplay = (props) => {
    const { images, item } = props;

    return (
        <section id='image-display'>
            {
                Object.keys(images).map((key, index) => {
                    return key === item ?
                        <img 
                            src={images[key]}
                            alt='key'
                            key={index}
                            className='image'
                        />
                        : null
                })
            }
        </section>
    )
};

export default ImageDisplay;
