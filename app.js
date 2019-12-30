const request = require('request')

const url = 'https://api.darksky.net/forecast/d97b2f7c517de91eca994ef49a5402cc/37.8267,-122.4233'

request({ url: url, json: true }, ( error, response) => {
	
})
