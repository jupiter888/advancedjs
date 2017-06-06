'use strict';
var Mushroom = require('./models/mushroom.js');
var express = require("express");
var app = express();



// configure Express app
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/../public'));
app.use(require("body-parser").urlencoded({extended: true}));
app.use((err, req, res, next) => {
  console.log(err);
});

// set template engine
let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html', defaultLayout: 'main' }));
app.set("view engine", ".html");

//first word of res render in curlies, is the html, and the err, [WORD]
app.get('/', (req,res) => {
    Mushroom.find((err,fungi) => {
        if (err) return (err);
        res.render('home', {mushrooms: fungi });    
    });
});


app.get('/about', (req,res) => {
    res.type('text/html');
    res.render('about');
});

app.get('/get', (req,res,next) => {
    Mushroom.findOne({ type:req.query.type }, (err, fungi) => {
        if (err) return (err);
        res.type('text/html');
        res.render('details', {result: fungi} ); 
    });
});

app.post('/get', (req,res, next) => {
    Mushroom.findOne({ type:req.body.type }, (err, fungi) => {
        if (err) return (err);
        res.type('text/html');
        res.render('details', {result: fungi} ); 
    });
});

app.get('/delete', (req,res) => {
    Mushroom.remove({ type:req.query.type }, (err, result) => {
        if (err) return (err);
        let deleted = result.result.n !== 0; //n will be 0 if no docs deleted
        Mushroom.count((err, total) => {
            if (err) return (err);
            res.type('text/html');
            res.render('delete', {type: req.query.type, deleted: deleted , total: total } );    
        });
    });
});

////////////////////////////////////////// api's
//retrieve item and print json
app.get('/api/mushroom/:type', (req, res) => {
    let type = req.params.type;
    console.log(type);
    Mushroom.findOne({type: type}, (err, result) => {
        if (err) return (err);
        if (!result) {
            res.json([]);
        }
        res.json( result );    
    });
});



//////////////////////////////
//add posts here
/////////////////////////////





app.get('/api/mushroom', (req,res, next) => {
    Mushroom.find((err,results) => {
        if (err || !results) return (err);
        res.json(results);
    });
});

app.get('/api/delete/:type', (req,res) => {
    Mushroom.remove({"type":req.params.type }, (err, result) => {
        if (err) return (err);
        // return # of items deleted
        res.json({"deleted": result.result.n});
    });
});

app.get('/api/add/:type/:otherName/:use', (req,res, next) => {
    //find & update existing item, or add new 
    let type = req.params.type;
    Mushroom.update({ type: type}, {type:type, otherName: req.params.otherName, use: req.params.use }, {upsert: true }, (err, result) => {
        if (err) return next(err);
        // nModified = 0 for new item, = 1+ for updated item 
        res.json({updated: result.nModified});
    });
});

// 404 handler
app.use((req,res) => {
    res.type('text/html'); 
    res.status(404) ;
    res.sendFile(__dirname + '/public/404.html');
});
     
app.listen(app.get('port'), function() {
    console.log('Express started');    
});