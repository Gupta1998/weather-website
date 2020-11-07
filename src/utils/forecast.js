const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=fcc0137c87e3ab8e19d6a502ed83c86f&query=' + latitude + ',' + longitude + '';

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback("Unable to get location. Try another search.", undefined);
        } else {
            callback(undefined, "It is " + body.current.weather_descriptions[0] + ' out there. The temperature is ' 
            + body.current.temperature + ' degrees out, but it feels like ' 
            + body.current.feelslike + ' degrees.');
        }
    });
}

module.exports = forecast;