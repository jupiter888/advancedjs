'use strict';
let mushroom= require("./lib/mushroom.js");
const express = require("express");
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // allows direct navigation to static files
app.use(require("body-parser").urlencoded( {extended: true} ));

let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

//send static file as response
app.get('/', function(req,res){
    res.type('text/html');
    res.sendFile(__dirname + '/public/home.html'); 
});

//send plain text About page response
app.get('/about', function(req,res){
    res.type('text/plain');
    res.send('About page');
});

// handle (delete) GET 
app.get('/delete', function(req,res){
    let result = mushroom.delete(req.query.type);
    res.render('delete' , {type: req.query.type , result: result});
});


//is this where i put the add?
app.post('/addMush', function(req, res){
	res.type('text/html');
	var mushtype = req.body.mush_type;
	var mushothname = req.body.mush_other_name;
	var mushuse=req.body.mush_use;
	var mushfreq=req.body.mush_freq;
	var mushdose=req.body.mush_dose;
	var success= mushroom.addmush(mushtype, mushothname, mushuse, mushfreq, mushdose);
// 	var footer = '<a href="/">Return to home</a>';
	
	if (success){
		req.session.feedback = {'success': true, 'msg': 'successfully added ' + mushtype + ' to our records.'};
	} else {
		req.session.feedback = {'success': false, 'msg': 'Error: unable to add ' + mushtype + 'to our records. Check to make sure it has not already been added.'};
	}

//	res.redirect('/');
});






// handle POST
app.post('/get', function(req,res){
    let header='Searching for the medicinal mushroom called ' +req.body.type;
    let found= mushroom.get(req.body.type);
    res.render("details", {type: req.body.type, result: found, pageheader: header} );
});


// handle (add) GET 
// app.get('/add', function(req,res){
//     let result = mushroom.add(req.query.type,req.query.name);
//     res.render('add' , {type: req.query.type , result: result});
// });

//above will not be a get, it will be a post?
//post is the info sent by a webpage
//get is retrieving the page and its displayed details


//new form needs to have name"" 

// define 404 handler
//later will make this go to a page
app.use(function(req,res) {
    res.type('text/html'); 
    res.status(404);
    res.sendFile(__dirname + '/public/404.html'); 
});



app.listen(app.get('port'), function() {
    console.log('Express started');    
});

   

