import React from 'react'

const MapView = (props) => {
    const { mapCreator } = props;
    return (
        <section id='map-view'>
            { mapCreator() }
        </section>
    )
};

export default MapView;