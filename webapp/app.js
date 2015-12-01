var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var itemsList = [];

/****************************************

FILES ARE FOR DEMONSTRATION PURPOSES ONLY

Author: Jacob Reed
Last Update: 30 November 2015
GitHub Repository:
GitHub Username: Jake32321
Contributors: Jake Reed

Hello there! I'm doing cool things with 
Node.js and ExpressJS.  If you want to
see what I am doing visit me over on 
GitHub, check out my stuff, and fork it!

*****************************************/

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

//Configure routes
app.get('/', function (req, res) { //Takes request and response object just like Node.js
	res.render('index', {
		title: 'My App',
		items: itemsList
	}); //Should return date, time, and items list
});

app.post('/add', function (req, res) { //Allows the user to post to the page 
	var newItem = req.body.newItem; //Allows for us to add to the list (requires use of middleware)
	console.log(newItem); //Logs new item
	itemsList.push({ //Pushes the new item to the list
		id: itemsList.length + 1,
		desc: newItem
	});
	res.redirect('/'); //Redirects to the home page preventing submission errors 
})

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