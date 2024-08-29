const request = require("request");


const forcast = (latitude, longitude, callback) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b6d44e253afb80c1f622eed1b51db91e`;

    request({url, json:true}, (error, response)=>{
        if(error){
            callback('the error might br due to network', undefined)
        }
        else if(response.body.weather === 0 && typeof(response.body.main) !== 'object'){
            callback('unable to find location, Try another server', undefined)

        }else{
            callback(undefined,{
                description: response.body.weather[0].description,
                humidity: response.body.main.humidity,
                windSpeed: response.body.wind.speed,
            }
            )
        }
    })

}
// request({url: URL_WEATHER, json:true}, (err, response) =>{
    //         const data = response.body.main
    //         console.log(`
    //         the current temperature is ${data.temp} the pressure in the city is ${data.pressure}, with a humidity if ${data.humidity} 
    //             `)
    // })


module.exports = forcast;


const getUserDetails = ( username, callback) =>{
    setTimeout(()=>{
        if(!username){
            return callback("the username is not available", null)
        }
        const user = {
            userId: 1,
            email:'examples@gmail.com',
            name: {
                firstName: "John",
                lastName: "Doe"
            }
        }
        callback(null, user)
    })
}

const getFriends = (userId, callback) =>{
    setTimeout(()=>{
        if(!userId){
            return callback("the userId is not available", null)
        }
        const friends = [
            {id: 1, name: "John", title:"post1", content:"content of a movie"},
            {id: 2, name: "Mary"},
            {id: 3, name: "David"}
        ]
        callback(null, friends)
    })
}

const getFriendPost = (friendId, callback) =>{

}