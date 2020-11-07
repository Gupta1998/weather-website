const request = require('request');

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ3VwdGF2YWliaGF2MTAyIiwiYSI6ImNrZ3RjcXRvZzAxN2sycXBqYXgxN3VnNXcifQ.nKDUAMhR0I5_TfBQ8ZEvKg';
    
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback("Unable to get Location!", undefined);
        } else if(body.features.length === 0) {
            callback("Unable to get location. Try another search.", undefined);
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            });
        }
    });
}



module.exports = geocode;
    