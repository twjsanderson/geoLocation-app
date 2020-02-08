import React from 'react'
import ResourcesView from './resources.component';
// eslint-disable-next-line
import { Element, animateScroll as scrollSpy, scroller } from 'react-scroll';

// constants
import resources from '../../constants/resourceArticles.js';

const Resources = () => {

    const goToArticles = () => {
        scroller.scrollTo('topOfArticles', {
            smooth: true, 
            duration: 1200
        })
    };

    return (
        <section id='resources'>
            <ResourcesView 
                resources={resources}
                goToArticles={goToArticles}
                element={<Element name="topOfArticles"></Element>}
            />
        </section>
    )
};

export default Resources;
