const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'https://api.darksky.net/forecast/d97b2f7c517de91eca994ef49a5402cc/37.8267,-122.4233'
// // DarkSky API Request
// request({ url: url, json: true }, ( error, response) => {
// 	// Error Handling
// 	if(error) {
// 		console.log('Unable to connect to the Weather service, please check your internet connection')
// 	} else if(data.error) {
// 		console.log(`Invalid request`)
// 	} else {
// 		const data = response.body
// 		console.log(`${data.currently.icon}. It is ${data.currently.temperature} out there. There is ${data.currently.precipProbability}% chance of rainfall`)
// 	}
// })

geocode('Boston', (error, data) => {
	console.log('Error', error)
	console.log('Data', data)
})
