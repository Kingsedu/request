const request = require("request");


const geoCode = (address, callback) =>{
    const encodedLocation = encodeURIComponent(address)
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=7a65677674f54e8196e66d217c1512ab`;
    request({url, json: true}, (error, response)=>{
        if(error){
            callback("unable to connect to location services", undefined)
        }
        else if(response.body.results.length === 0){
            callback("Unable to find location, Try another server", undefined)
        }else {
            callback( undefined, {
                latitude: response.body.results[0]?.annotations?.DMS.lat,
                longitude: response.body.results[0]?.annotations?.DMS.lng,
                location: response.body.results[0].components.country
            })
        }

    })
}


module.exports = geoCode;