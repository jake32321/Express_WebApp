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
<h3>30 Nov 2015 (2)</h3>
<p>Added a list to the page.  Working on a way to add more data <br>
to the list.  Maybe even possibly remove data.</p>

```HTML
<body>
	<h1><%= title %></h1>
	<%= new Date() %>
	<ul>
		<% for (var i  = 0; i < items.length; i++) { %>
			<li><%= items[i].desc %></li> <!-- Lists all of the descendant for each of the items in the items list -->
		<% } %>
	</ul>
</body>
```

<h3>Current Build Status</h3>
### Status
[![Build Status](https://travis-ci.org/simkimsia/UtilityBehaviors.png)](https://travis-ci.org/simkimsia/UtilityBehaviors)
