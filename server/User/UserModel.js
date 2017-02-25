//implement model here

var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	FirstName : String,
	LastName : String,
	Gender :String,
	ID :Number

});

var User = mongoose.model('User', UserSchema);

module.exports = User; 