// make http request in nodejsn
const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const address = process.argv[2]

// const url = 'http://api.weatherstack.com/current?access_key=8a0fa6fe265748866e1a1629ab5e4ead&query=New York&units=f';
// request({url, json:true}, (err, response)=>{
//     if(err){
//         // check if internet is off
//         console.log('Unable to connect to weather service!');
//     }else if(response.body.err){
//         // check if you enter wrong location
//         console.log('unable to find a location');
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0]+', I is currently '+ response.body.current.temperature+ ' degrees out, it is feels like  '+ response.body.current.feelslike+" degress out!");
//     }
// })



// Geocoding
//Address -> lat/long -> weather

// const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoicm9oaXRwcmFqYXBhdGk3IiwiYSI6ImNrc3Uzd3pwcTE1aTcydnBuOTF4YzN6ZTAifQ.wG2Gnaos_3ogPrkEiwfmsg';
// const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%1230Angeles.json?access_token=pk.eyJ1Ijoicm9oaXRwcmFqYXBhdGk3IiwiYSI6ImNrc3Uzd3pwcTE1aTcydnBuOTF4YzN6ZTAifQ.wG2Gnaos_3ogPrkEiwfmsg';
// request({url: geocodingURL, json: true}, (error, response)=> {
        
//     if(error){
//         console.log('Unable to connect to laction services')
//     }
//     else if(response.body.features.length === 0){
//         console.log('Unable to find location, Try another Search!')
//     }
//     else{
//         const latitude = response.body.features[0].center[0]
//         const longitude = response.body.features[0].center[1]
//         console.log(latitude, longitude)
//     }
// })
// in myProgram there four diffrent places to take location and get corrdinates back we will put this above
// code four times


geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(37.8267, -122.4233, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })


  // Now combine the forecast and geocoding 
  // if(!address) {
  //   console.log('Please provide an address?')
  // }
  // else{
  //   geocode(address, (error, data) => {
  //     // if something went wrong with geocoding
  //     if(error) {
  //       return console.log(error)
  //     }                                                // changing name of variable
  //     forecast(data.latitude, data.longitude, (error, forecastData) => {
  //       if(error) {
  //         return console.log(error)
  //       }
  //       console.log(data.location)
  //       console.log(forecastData)
  //     })
  //   })
  // }
  // console.log(process.argv)
  