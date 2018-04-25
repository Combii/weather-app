const request = require('request');
const _ = require('lodash');

//ID
//35a92e96a16bfc05f4f8ecbe48cb0242

getWeather = (latitude, longitude, callback) => {

    request({
        url: `https://api.darksky.net/forecast/35a92e96a16bfc05f4f8ecbe48cb0242/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && body.code !== 400) {
            callback(undefined, {
                temperature: convertFtoC(body.currently.temperature),
                apparentTemperature: convertFtoC(body.currently.apparentTemperature)
            });
        }
        else {
            callback("Unable to fetch weather.");
        }
    });
};

convertFtoC = (fahrenheit) => {
    return _.round((fahrenheit-32) / 1.8, 2);
};


module.exports = {
    getWeather
};