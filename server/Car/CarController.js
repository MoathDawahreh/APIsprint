//require files here
var Car = require('../Car/CarModel.js');
var mongoose = require('mongoose');


module.exports ={
	insertCars : function (req, res) {
				
	},
	GetCarByID : function(req,res){
		var ID = req.params.ID;
		console.log('-=-=-=-=-=-=Id',ID)
		// mongoose.model('Car').find({ Car : ID },function(){

		// })
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