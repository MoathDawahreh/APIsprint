var mongoose = require('mongoose');

var CarSchema = new mongoose.Schema({
	Color : String,
	Company : String,
	ID :Number

});


var Car = mongoose.model('Car', CarSchema);

/////////////////
var Nissan = new Car({
	Color: 'Orange',
	Company: 'nn',
	ID: '2' 
});
Nissan.save(function(err) {
  	if (err) throw err;
    console.log('-------saved')
});

var BMW = new Car({
	Color: 'Red',
	Company: 'BMW',
	ID: '123' 
});
BMW.save(function(err) {
  	if (err) throw err;
    console.log('-------saved')
});
//////////////////

module.exports = Car; 