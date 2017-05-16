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

//About page response
app.get('/about', function(req,res){
    res.type('text/plain');
    res.send('About page');
});

// handle /delete
app.get('/delete', function(req,res){
    let result = mushroom.delete(req.query.type);
    res.render('delete' , {type: req.query.type , result: result});
});

// get
app.post('/get', function(req,res){
    let header='Searching for the medicinal mushroom called ' +req.body.type;
    let found= mushroom.get(req.body.type);
    res.render("details", {type: req.body.type, result: found} );
});

app.post('/add',function(req,res){
    let completeMushroom={type : req.body.type, otherName: req.body.otherName, use: req.body.use, frequency: req.body.frequency, dosageMg:req.body.dosageMg};
    let added= mushroom.add(completeMushroom);
    res.render('add', {type: req.body.type, result:added});
});

// 404 handler
app.use(function(req,res) {
    res.type('text/html'); 
    res.status(404);
    res.sendFile(__dirname + '/public/404.html'); 
});

// 	if (success){
// 		req.session.feedback = {'success': true, 'msg': 'successfully added ' + mushtype + ' to our records.'};
// 	} else {
// 		req.session.feedback = {'success': false, 'msg': 'Error: unable to add ' + mushtype + 'to our records. Check to make sure it has not already been added.'};
// 	}

app.listen(app.get('port'), function() {
    console.log('Express started');    
});

   

