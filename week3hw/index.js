'use strict';
let mushrooms= require("./lib/mushrooms.js");
const express = require("express");
const app = express();

//line 7, this app.set is not highlighted blue, express not installed in this folder?
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // allows direct navigation to static files
app.use(require("body-parser").urlencoded( {extended: true} ));

let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

// send static file as response
app.get('/', function(req,res){
    res.type('text/html');
    res.sendFile(__dirname + '/public/home.html'); 
});

//send text response
app.get('/about', function(req,res){
    res.type('text/plain');
    res.send('About page');
});

// handle GET 
app.get('/delete', function(req,res){
    let result = mushrooms.delete(req.query.type); 
    //missing res.type
    console.log(result.totalremaining); 
    res.render('delete', {type: req.query.type, result: result});
});

// handle POST
app.post('/get', function(req,res){
    let header='Searching for the medicinal mushroom called ' +req.body.type;
    let found= mushrooms.get(req.body.title);
    res.render("details", {type: req.body.type, result: found, pageheader: header} );
});

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

   


////////////////////////////////////////////////////////////////////////////////////
// //defined module called books again
// //defined functions for get, delete, add items from array
// //each of those functions communcating with the hw3.js module
// //installed querystring
// //used writehead to print on line 46
// //serveStatic made most of this possible, was getting errors before i included this
// //installed express-handlebars 
// //installed body-parser
// //converted 
