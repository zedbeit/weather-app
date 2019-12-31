const request = require('request')

const geocode = (address, callback) => {
	const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiemVkMTIzIiwiYSI6ImNrNHNoempkZzB6Zm4za3A1dGo5emcyeXkifQ.Ed3jZfEjQvr_rLKqwBG91w&limit=1'
	request( { url: url, json: true}, (error, response) => {
		if(error) {
			callback('check your internet connection', undefined)
		} else if(response.body.features.length === 0) {
			callback('Could not find location')
		} else {
			callback(undefined, {
				latitude: response.body.features[0].center[0],
				longitude: response.body.features[0].center[1],
				location: response.body.features[0].place_name
			})
		}
	})
}

module.exports = geocode