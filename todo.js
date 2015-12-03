/*******************************

Author: Jacob Reed
Last Update: 30 November 2015
GitHub Repository: https://github.com/jake32321/Express_WebApp.git
GitHub Username: Jake32321

*******************************/

var express = require('express');

//Creates routes
var router = express.Router();
var itemsList = [];

router.get('/', function (req, res) { //Takes request and response object just like Node.js
	res.render('index', {
		title: 'My App',
		items: itemsList
	}); //Should return titles, date, time, and items list
});

router.post('/add', function (req, res) { //Allows the user to post to the page 
	var newItem = req.body.newItem; //Allows for us to add to the list (requires use of middleware)
	console.log(newItem); //Logs new item
	itemsList.push({ //Pushes the new item to the list
		id: itemsList.length + 1,
		desc: newItem
	});
	res.redirect('/'); //Redirects to the home page preventing submission errors 
});

//Exports the router for use in the app.
module.exports = router;