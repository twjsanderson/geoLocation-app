import React from 'react';

function App() {
  // let lastRendered = window.document.lastModified;

  // 3 params: success cb, error cb, postionOptions Object
  const getLocationData = () => {
    return window.navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let accuracy = position.coords.accuracy;
      console.log('lat: ', lat, 'lon: ', lon, 'accuracy: ', accuracy)
    }, (error) => {
      console.log(error)
    },
      { enableHighAccuracy: true, timeout: 3000 }
    )
  };
  const link = () => {
    fetch('https://api.linkedin.com/v1/people-search?first-name=Tom')
    .then(results => {
      console.log(results.json())
    })
  }
  link()
  
  return (
    <section>
      <h1>Nav</h1>
        <h1>Geolocate</h1>
      <h1>Footer</h1>
      <button onClick={getLocationData}>click me</button>
    </section>
  );
}

export default App;