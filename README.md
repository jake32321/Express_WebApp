# Express_WebApp
Web app I have been working on using Node.js and ExpressJS.  Mostly for practice and demonstration.

<h3>Please feel free to fork and play around with this.</h3>
<h1>Web App Structure</h1>
<p>Currently displays the current date and time on a single <br>
page web app.  Still needs some work but is meant almost <br>
entirely for demonstrational purposes.</p>
<br>
<h1>Edit History</h1>
<h3>30 Nov 2015</h3>
<p>Made the first commit with the basic structure of the <br>
app along with it's basic functions.</p>

```JavaScript
var http = require('http');
var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //Sets the views directory for the ejs files

//Configure routes
app.get('/', function (req, res) { //Takes request and response object just like Node.js
	res.render('index'); //Should return date and time
});


app.listen(1337, function () {
	console.log('Starting the server at http://127.0.0.1:1337');
});
```
