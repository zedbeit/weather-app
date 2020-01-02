const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// geocode function Invocation
geocode('michigan', (error, data) => {
	if (error) {
		return console.log(error)
	}
	forecast(data.latitude, data.longitude, (error, forecastData) => {
		if(error) console.log('Error:', error)
		else {
			console.log(data.location)
			console.log(forecastData)	
		} 
	})
})

