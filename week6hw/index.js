'use strict';
var fungus = require('./models/mushroom.js');
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

//adding new items to db
new fungus({
        type: 'agaricus blazei',
        otherName: 'Prince',
        use: 'anti cancer',
        frequency: 'daily',
        dosageMg: '500'
    }).save();
    
    new fungus({
        type: 'cordycep militaris',
        otherName: 'korean cordycep',
        use: 'anti cancer, stamina',
        frequency: 'daily',
        dosageMg: '300'
    }).save();


//send static file as response
app.get('/', function(req,res){
    res.type('text/html');
    res.render('home',{items: fungus.getAll() });
 //this is the constant link to home, we now want this to be dynamic
 //able to change when item is added
//    res.sendFile(__dirname + '/public/home.html'); 
});

//search
fungus.find(function(err, mushrooms){
    if(err) return console.error(err);
    if(mushrooms.length) return;
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