const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// geocode function Invocation
geocode('Boston', (error, data) => {
	console.log('Error', error)
	console.log('Data', data)
})

// forecast function Invocation
forecast('', 44.1545, (error, data) => {
	if(error) console.log('Error: ', error)
	else console.log('Data: ', data)
})
