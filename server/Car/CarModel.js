var mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({
	Color : String,
	Company : String,
	ID :Number

});

var Car = mongoose.model('Car', CarSchema);

module.exports = Car; 