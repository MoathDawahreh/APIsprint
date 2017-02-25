//require files here
var Car = require('../Car/CarModel.js');
var mongoose = require('mongoose');


module.exports ={
	insertCars : function (req, res) {
		// var cars = req.body
		// mongoose.connection.collection('Car').insert(car);
		// for (var i = 0; i < Things.length; i++) {
		// 	Things[i]
		// }
				
	},
	GetCarByID : function(req,res){
		var ID = req.params.ID;
		console.log('-=-=-=-=-=-=Id',ID)
		Car.find({ ID: ID }, function(err, cars) {
		  if (err) throw err;
		  // console.log(cars);
		  res.send(cars)
		});

	},
	GetAllCars : function(req,res){
		Car.find({}, function(err, cars) {

		  	if (err) throw err;
		  	console.log(cars);
    		res.send(cars); 
		});
	}

	//you have to use the books model to make a new database entry 
	
	//you need to use params.id to find a books from your database
	
}