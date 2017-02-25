//you need to require some files here
var express = require('express');
var bodyParser = require('body-parser');
var CarController = require('../Car/CarController.js');
var UserController = require('../User/UserController.js');

var app = express()

module.exports = function (app, express) {
	app.get('/', function(req, res) {
 	 res.send('helloooo! Its mee');
	});

//=============================================================================
/*								User route									 */
//=============================================================================
	app.get('/api/User/getAll',UserController.getAllUsers);
	app.get('/api/User/GetUserByID/:ID',UserController.GetUserByID);
	app.post('/api/User/AddNewUser',UserController.AddNewUser);


// 	//here you have to add two more routes
	
// //=============================================================================
// /*								Car route									 */
// //=============================================================================
//post 201
	app.post('/api/Car/insterCars', CarController.insertCars);
	app.get('/api/Car/findCar/:ID', CarController.GetCarByID);
	app.get('/api/Car/getAll', CarController.GetAllCars);

	//here you have to add two more routes

};

