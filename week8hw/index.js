'use strict';
var mushroom = require('./models/mushroom.js');
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
    mushroom.find((err,results) => {
        if (err) return (err);
        res.render('home', {mushrooms: JSON.stringify(results) });    
    });
});


app.get('/about', (req,res) => {
    res.type('text/html');
    res.render('about');
});

app.get('/get', (req,res,next) => {
    mushroom.findOne({ type:req.query.type }, (err, mushroom) => {
        if (err) return (err);
        res.type('text/html');
        res.render('details', {result: mushroom} ); 
    });
});

app.post('/get', (req,res, next) => {
    mushroom.findOne({ type:req.body.type }, (err, mushroom) => {
        if (err) return (err);
        res.type('text/html');
        res.render('details', {result:mushroom} ); 
    });
});

app.get('/api/mushroom/delete/:id', (req,res, next) => {
    mushroom.remove({"_id":req.params.id }, (err, result) => {
        if (err) return (err);
        let deleted = result.result.n !== 0; //n will be 0 if no docs deleted
        mushroom.count((err, total) => {
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
    mushroom.findOne({type: type}, (err, result) => {
        if (err) return (err);
        if (!result) {
            res.json([]);
        }
        res.json( result );    
    });
});

//added trail / behind mushroom below. june 7 18:21*
app.get('/api/mushroom', (req,res, next) => {
    mushroom.find((err,results) => {
        if (err || !results) return (err);
        res.json(results);
    });
});


//delete
app.get('/api/mushroom/delete/:type', (req,res) => {
    mushroom.remove({"type":req.params.type }, (err, result) => {
        if (err) return (err);
        // return # of items deleted
        res.json({"deleted": result.result.n});
    });
});

//finds, edits, or adds
app.get('/api/mushroom/add/:type/:otherName/:use', (req,res, next) => {
    //find & update existing item, or add new 
    let type = req.params.type;
    mushroom.update({ type: type}, {type:type, otherName: req.params.otherName, use: req.params.use }, {upsert: true }, (err, result) => {
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

