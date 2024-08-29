const https = require("https");
const url = "https://api.opencagedata.com/geocode/v1/json?q=Jos&key=7a65677674f54e8196e66d217c1512ab";

const req = https.request(url, (res)=>{
    let data = '';

    res.on('data', (chunk)=>{
        console.log(chunk)
        data = chunk.toString();
        const dataBody = JSON.parse(data);
        console.log(dataBody)
    })
    res.on('end', ()=>{

    })
})

req.end()












// console.log("i am connected")

// setTimeout(()=>{
//     console.log("i will show after the call stack is empty like 2 seconds after that");
// }, 2000)

// const geoCode = (address, callback) =>{
//     setTimeout(()=>{
//         const data ={
//             latitude: 0,
//             longitude: 0
//         }
//         console.log("inside the settimeout function")
//         callback( data )
//     },2000)
// }

// geoCode("Jos", (data)=>{
//     console.log(data);
// })


//goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


// const add = (num1, num2, callback) =>{
//     setTimeout(()=>{
//         const sum = num1 + num2;
//         callback(sum);
//     },2000)
// }

// add(1,2, (sum)=>{
//     console.log(sum)
// })
