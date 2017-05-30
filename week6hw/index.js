'use strict';
var Mushroom = require('./models/mushroom.js');
var express = require("express");
var app = express();

//express
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // allows direct navigation to static files
app.use(require("body-parser").urlencoded( {extended: true} ));

//template engine
let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

//send static file as response with dynamic data
app.get('/', function(req,res){
    res.type('text/html');
    res.render('home',{items: Mushroom.getAll() });
});

//need delete route
//need add route
//search(get all in collection)

/////////////////////////////////////////////////
// handle /delete
app.get('/delete', function(req,res){
    let result = Mushroom.delete(req.query.type);
    res.render('delete' , {type: req.query.type , result: result});
});

//handle /add
app.post('/add', function(req,res){ 
    
});

app.get('/add',function(req,res){
    
});

// get details via form post,using req body
app.post('/get', function(req,res){
    let header='Searching for the medicinal mushroom called ' +req.body.type;
    let found= Mushroom.get(req.body.type);
    res.render("details", {type: req.body.type, result: found} );
});



// get details via link, uses req.query
app.get('/get', function(req,res){
    let header='Searching for the medicinal mushroom called ' +req.query.type;
    let found= Mushroom.get(req.query.type);
    res.render("details", {type: req.query.type, result: found} );
});







/////////////////////////////////////////////////
// fungus.find(function(err, mushrooms){
//     if(err) return console.error(err);
//     if(mushrooms.length) return;
// });

// 404 handler
app.use(function(req,res) {
    res.type('text/html'); 
    res.status(404);
    res.sendFile(__dirname + '/public/404.html'); 
});

//confirm server started
app.listen(app.get('port'), function() {
    console.log('Express started');    
});