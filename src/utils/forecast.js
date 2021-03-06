const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=fcc0137c87e3ab8e19d6a502ed83c86f&query=' + latitude + ',' + longitude + '';

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback("Unable to get location. Try another search.", undefined);
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. The temperature is ' 
            + body.current.temperature + ' degrees, and there is ' 
            + body.current.precip + '% chance of rain.');
        }
    });
}

module.exports = forecast;