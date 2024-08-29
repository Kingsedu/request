// require('dotenv').config();ss

const geoCode = require("./utilis/geocode.js");
const forcast = require("./utilis/forcast.js");
const address = process.argv[2];

geoCode(address, (error, { latitude, longitude, location })=>{

    if(!address){
        console.log("please enter address")
    }
    if(error){
        return console.log(error)
    }
    forcast(latitude, longitude, (error, { description, humidity, windSpeed })=>{
        if(error){
            return console.log(error)
        }
        console.log('Data', location)
        console.log('Forecast', { description, humidity, windSpeed } )
    })
})

