const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const members = require('./utils/member')

const app = express()

// Paths
const publicPathDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials') 

// setting up hbs template engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// serving up static assets
app.use(express.static(publicPathDir))

// setting up routes handler
app.get('', (req, res) => {
	res.render('index', {
		name:'Beita',
		age: 27,
		title: 'Weather'
	})
})
app.get('/about', (req, res) => {
	res.render('about', {
		title:'About',
		name:'Beita',
		city:'Lagos' 
	})
})
app.get('/help', (req, res) => {
	res.render('help', {
		title :'help',
		name:'Beita',
		country: 'Nigeria'
	})
})
app.get('/error', (req, res) => {
	res.render('error', {
		message:'Page not found',
		title:'Error Page'
	})
})
app.get('/weather', (req, res) => {
	if(!req.query.address) {
		return res.send({
			error: 'You must provide an address'
		})
	}
	geocode(req.query.address, (error, { latitude, longitude, location} = {}) => {
		if (error) {
			return res.send({
				Error: error
			})
		}
		forecast(latitude, longitude, (error, forecastData) => {
			if(error) {
				return res.send({
					Error: error
				})
			} 
			res.send({
				forecast: forecastData,
				location,
				address: req.query.address
			})
		})
	})	
})

app.get('/products', (req, res) => {
	if(!req.query.search) {
		return	res.send({
			error: 'You must provide a search query'
		})
	}
	
	console.log(req.query.search)
	res.send({
		product: []
	})

})

app.get('/members', (req, res) => {
	res.json(members)
})

app.get('/members/:name', (req, res) => {
	res.json(members.filter(member =>{
		return member.name === req.params.name
	}))
})


app.get('/help/*', (req, res) => {
	res.render('404', {
		errorMessage: 'Help article not found'
	})
})
app.get('*', (req, res) => {
	res.send('My 404 page')
})

app.listen(3000, () => {
	console.log('Server is up on port 3000')
})