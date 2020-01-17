// 3 params: success cb, error cb, postionOptions Object
export const getLocationData = () => {
    let lat, lng, accuracy, error = null;
    window.navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude,
        lng = position.coords.longitude,
        accuracy = position.coords.accuracy;
    }, (error) => {
        error = error
    },
        { enableHighAccuracy: true, timeout: 3000 }
    );
    return { lat, lng, accuracy, error };
};