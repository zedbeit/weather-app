const request =  require('request')

const forecast = (latitude, longitude, callback) => {
	const url = `https://api.darksky.net/forecast/d97b2f7c517de91eca994ef49a5402cc/${latitude},${longitude}` 
	request( {url, json: true}, ( error, { body }) => {
		if(error) {
			callback('check your internet connection', undefined)
		} else if(body.error) {
			callback('Invalid search request', undefined)
		} else {
			callback(undefined, `${body.currently.icon}. It is ${body.currently.temperature} out there. There is ${body.currently.precipProbability}% chance of rainfall`)
		}
	})
}

module.exports = forecast