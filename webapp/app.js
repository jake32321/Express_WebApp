var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var itemsList = [];

/******************************************************************

APP IS FOR DEMONSTRATION PURPOSES

Author: Jacob Reed
Last Update: 30 November 2015
GitHub Repository: https://github.com/jake32321/Express_WebApp.git
GitHub Username: Jake32321

******************************************************************/

/*
Node is pretty crappy when it comes to doing pages since you would have to do
everything inside of the createServer() function.  ExpressJS needs to be utilized 
to make use of better options.
*/


//How it's done with express

//Configures the view settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //Sets the views directory for the ejs files

//Adds the middleware for use 
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components'))); //Allows the app to serve static files from the bower_components file

//Middleware for logging information to the console
app.use(function (req, res, next){
	console.log(req.method+' '+req.url+' '+(new Date())); //Sends access data to the console
	next(); //THIS IS ABSOLUTELY CRUCIAL
});

//Middleware for handling errors
app.use(function (err, req, res, next){
	res.status(err.status || 500); //Checks the error
	res.render('error', { //Renders a visible error to the user
		message: err.message,
		error: err
	});
});

//Configure routes
app.get('/', function (req, res) { //Takes request and response object just like Node.js
	res.render('index', {
		title: 'My App',
		items: itemsList
	}); //Should return titles, date, time, and items list
});

app.post('/add', function (req, res) { //Allows the user to post to the page 
	var newItem = req.body.newItem; //Allows for us to add to the list (requires use of middleware)
	console.log(newItem); //Logs new item
	itemsList.push({ //Pushes the new item to the list
		id: itemsList.length + 1,
		desc: newItem
	});
	res.redirect('/'); //Redirects to the home page preventing submission errors 
});

app.listen(1337, function () {
	console.log('Starting the server at http://127.0.0.1:1337');
});


//Here's the same except with Node.js
/*
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/plain'}); //Head of the page 
	res.end('Hello World!\n'); //Ends page response with text
}).listen(1337, '127.0.0.1');
console.log('Sever running at http://127.0.0.1:1337');
*/