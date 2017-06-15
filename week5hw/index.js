'use strict';
let mushroom= require("./lib/mushroom.js");
const express = require("express");
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // allows direct navigation to static files
app.use(require("body-parser").urlencoded( {extended: true} ));

var viewsPath = __dirname + '/views';

var handlebars =  require("express-handlebars").create({
    defaultLayout: 'main',
    extname: '.hbs', layoutsDir: viewsPath + '/layouts',  
    partialsDir: viewsPath + '/partials' });
    
app.engine(".hbs", handlebars.engine);
app.set('views', viewsPath );
//({extname: '.hbs', defaultLayout: 'main' , layoutsDir: viewsPath + '/layouts' }));
app.set('view engine','.hbs');

////////////////////////

//send static file as response
app.get('/', function(req,res){
    res.type('text/html');
    res.render('home',{items: mushroom.getAll() });
 //this is the constant link to home, we now want this to be dynamic
 //able to change when item is added
//    res.sendFile(__dirname + '/public/home.html'); 
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

// get details via form post,using req body
app.post('/get', function(req,res){
    //let header='Searching for the medicinal mushroom called ' +req.body.type;
    let found= mushroom.get(req.body.type);
    res.render("details", {type: req.body.type, result: found} );
});

// get details via link, uses req.query
app.get('/get', function(req,res){
    //let header='Searching for the medicinal mushroom called ' +req.query.type;
    let found= mushroom.get(req.query.type);
    res.render("details", {type: req.query.type, result: found} );
});

//add item to array
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
app.listen(app.get('port'), function() {
    console.log('Express started');    
});


