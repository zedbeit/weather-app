const request = require('request')
const url = 'https://api.darksky.net/forecast/d97b2f7c517de91eca994ef49a5402cc/37.8267,-122.4233'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiemVkMTIzIiwiYSI6ImNrNHNoempkZzB6Zm4za3A1dGo5emcyeXkifQ.Ed3jZfEjQvr_rLKqwBG91w'

request({ url: geocodeURL, json: true }, ( error, response) => {
	const dataFeatures = response.body.features
})

request({ url: url, json: true }, ( error, response) => {
	const data = response.body
})
