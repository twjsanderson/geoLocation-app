import React from 'react'

const MapView = (props) => {
    const { mapCreator } = props;
    return (
        <section id='map-view'>
            <h1>Map</h1>
            {mapCreator()}
        </section>
    )
};

export default MapView;