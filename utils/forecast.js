const request =  require('request')

const forecast = (latitude, longitude, callback) => {
	const url = `https://api.darksky.net/forecast/d97b2f7c517de91eca994ef49a5402cc/${latitude},${longitude}` 
	request( {url: url, json: true}, ( error, response) => {
		if(error) {
			callback('check your internet connection', undefined)
		} else if(response.body.error) {
			callback('Invalid search request', undefined)
		} else {
			callback(undefined, `${response.body.currently.icon}. It is ${response.body.currently.temperature} out there. There is ${response.body.currently.precipProbability}% chance of rainfall`)
		}
	})
}

module.exports = forecast