import React from 'react'
import { Button } from 'react-bootstrap';
import { useTracking } from 'react-tracking';

const TrackingButton = (props) => {
    const { name, alt, style, fn } = props;
    const { trackEvent } = useTracking();

    return (
      <Button
        onClick={() => { 
            trackEvent({ event: 'tracking button pushed' })
            fn()
        }}
        className={style}
        alt={alt}
      >
        {name}
      </Button>
    )
}
export default TrackingButton;
