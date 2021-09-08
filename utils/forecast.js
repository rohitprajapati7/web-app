const request = require('request')
const forecast =(latitude, longitude, callback)=> {
    const url = 'http://api.weatherstack.com/current?access_key=8a0fa6fe265748866e1a1629ab5e4ead&query='+latitude+','+longitude

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        }else if(response.body.error) {
            callback('Unable to find location', undefined)
        }else {
            callback(undefined, response.body.current.weather_descriptions[0]+', I is currently '+ response.body.current.temperature+ ' degrees out, it is feels like  '+ response.body.current.feelslike+" degress out!")
        }
    })
}

module.exports = forecast;
