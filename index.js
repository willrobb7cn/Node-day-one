const request = require('request'); // npm i request
const {promisify} = require('util');
const promisifiedRequest = promisify(request)
require('dotenv').config()

 const getWeather= async  ()=> {
    let data = await promisifiedRequest({
        uri:`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: true
    },(err, res)=>{
         if (err) throw err;
         //comment what the error message is...
         /*
         Common Fixes:
         #ReferenceError: APP is not defined - APP needs to be an APPID
         */
         console.log(res.body)
     }
     )
 }

 getWeather()