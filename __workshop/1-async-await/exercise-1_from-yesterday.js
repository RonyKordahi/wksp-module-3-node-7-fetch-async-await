// Exercise 1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = async () => {
    return request ("http://api.open-notify.org/iss-now.json")
        .then(JSON.parse)
        .then(data => {
            return {lat: data.iss_position.latitude, lng: data.iss_position.longitude}
        })
}

const doIt = async () => {
    try {
        const position = await getIssPosition();
        console.log(position);
    }
    catch (error) {
        console.log(error);
    }
}

doIt();