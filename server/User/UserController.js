//require the model here
var User = require('../User/UserModel.js');
var mongoose = require('mongoose');


module.exports ={
	getAllUsers : function (req, res) {
		User.find({}, function(err, Users) {
		  	if (err) throw err;
		  	console.log(Users);
    		res.send(Users); 
		});
	
	},
	GetUserByID : function(req,res){
		var ID = req.params.ID;
		console.log('*****************************Id',ID)
		User.find({ ID: ID }, function(err, Users) {
		  if (err) throw err;
		  res.send(Users)
		});
	},
	AddNewUser : function(req,res){
		console.log(req.body.FirstName)
		var User3= new User({
			FirstName: req.body.FirstName,
			LastName: req.body.LastName,
			Gender : req.body.Gender,
			ID: req.body.ID
		});
		User3.save(function(err,data) {
			console.log(data)
			if (err) {

			}else

		  	// if (err) throw err;
		  	res.json(data)
		// res.send(data)
		});



		
	}
	
}