//you need to require some files here
var express = require('express');
var bodyParser = require('body-parser');
var CarController = require('../Car/CarController.js');


var app = express()


module.exports = function (app, express) {

	app.get('/', function(req, res) {
 	 res.send('helloooo! Its mee');
	});

//=============================================================================
/*								movie route									 */
//=============================================================================
	// app.get('/api/movie/getAll', movieController.getAllMovies);
// 	//here you have to add two more routes
	
// //=============================================================================
// /*								book route									 */
// //=============================================================================
//post 201
	app.post('/api/Car/insterCars', CarController.insertCars);
	app.get('/api/Car/findCar/:ID', CarController.GetCarByID);
	app.get('/api/Car/all', CarController.GetAllCars);

	//here you have to add two more routes

};

