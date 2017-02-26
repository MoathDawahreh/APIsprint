//require express and mongoose here
//require your middleware and routes here
var express = require('express');
var mongoose = require('mongoose')

var app = express()
require('./config/middleware.js')(app , express);
require('./config/routes.js')(app , express);

var port = 3000

//=============================================================================
/*									Database								 */
//=============================================================================
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mydb');


	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected


//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port

app.listen(process.env.PORT || port);

// module.exports= //some thing;