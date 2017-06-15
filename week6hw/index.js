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

//search(get all in collection)
app.get('/', function(req,res){
    Mushroom.find(function(err, mushrooms) {
    if(err) return(err);
    res.render('home',{mushrooms: mushrooms });
    });
});



//delete
app.get('/delete', (req,res)=>{
    Mushroom.remove({ type:req.query.type }, (err, result) => {
        if (err) return(err);
        Mushroom.find(function(err, mushrooms) {
             if(err) return(err);
            var total = mushrooms.length;
            res.render('delete' , {type: req.query.type , deleted: true, total: total});
        });
//    let deleted = result.total;
    //let result = Mushroom.delete(req.query.type)
//    res.render('delete' , {type: req.query.type , deleted: result});
    });
});


// post add
app.post('/add', function(req,res){
    let completeMushroom={type : req.body.type, otherName: req.body.otherName, use: req.body.use, frequency: req.body.frequency, dosageMg:req.body.dosageMg};
     let added= Mushroom.add(completeMushroom);
    res.render('add', {type: req.body.type, result:added});
});

// get add
app.get('/add',function(req,res){
    let result = Mushroom.add(req.query.type);
    res.render('add' , {type: req.query.type , result: result});
});

// find 
app.get('/get', (req,res)=>{
    Mushroom.findOne({type: req.query.type},(err, mushroom)=>{
        if(err) return(err);
        res.type('text/html');
        res.render('details',{result:mushroom});
    });
});

app.post('/get', (req,res) =>{
    Mushroom.findOne({type: req.body.type},(err, mushroom)=>{
        if(err) return(err);
        res.type('text/html');
        res.render('details',{result:mushroom} );
    });
});

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

