const request = require('request');
const {promisify} = require('util');

// const APPID = "bdf97cf68eec6a2a689cffff7c4c0809"//https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=
const promisifiedRequest = promisify(request)

require('dotenv').config()

const getWeather = async () => {
    let data = await promisifiedRequest({
        uri:`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${process.env.APPID}`,
        json: true
    })
    console.log(data.body)
}

getWeather()
