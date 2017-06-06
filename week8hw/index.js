'use strict';

let express = require("express");
let bodyParser = require("body-parser");
let Book = require("../models/book"); // use database model

let app = express();

// configure Express app
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', require("cors")());
app.use((err, req, res, next) => {
  console.log(err);
});

// set template engine
let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html', defaultLayout: 'main' }));
app.set("view engine", ".html");

app.get('/', (req,res) => {
    Book.find((err,books) => {
        if (err) return (err);
        res.render('home', {books: JSON.stringify(books)});    
    });
});

app.get('/about', (req,res) => {
    res.type('text/html');
    res.render('about');
});

// api's
app.get('/api/v1/book/:title', (req, res, next) => {
    let title = req.params.title;
    console.log(title);
    Book.findOne({title: title}, (err, result) => {
        if (err || !result) return next(err);
        res.json( result );    
    });
});

app.get('/api/v1/books', (req,res, next) => {
    Book.find((err,results) => {
        if (err || !results) return next(err);
        res.json(results);
    });
});

app.get('/api/v1/delete/:title', (req,res, next) => {
    Book.remove({"title":req.params.title }, (err, result) => {
        if (err) return next(err);
        // return # of items deleted
        res.json({"deleted": result.result.n});
    });
});

app.post('/api/v1/add/', (req,res, next) => {
    // find & update existing item, or add new 
    if (!req.body._id) { // insert new document
        let book = new Book({title:req.body.title,author:req.body.author,pubdate:req.body.pubdate});
        book.save((err,newBook) => {
            if (err) return next(err);
            console.log(newBook);
            res.json({updated: 0, _id: newBook._id});
        });
    } else { // update existing document
        Book.updateOne({ _id: req.body._id}, {title:req.body.title, author: req.body.author, pubdate: req.body.pubdate }, {upsert: true }, (err, result) => {
            if (err) return next(err);
            if (result.upserted) {
              var  id = result.upserted._id;
            }
            res.json({updated: result.nModified, _id: id});
        });
    }
});

app.get('/api/v1/add/:title/:author/:pubdate', (req,res, next) => {
    // find & update existing item, or add new 
    let title = req.params.title;
    Book.update({ title: title}, {title:title, author: req.params.author, pubdate: req.params.pubdate }, {upsert: true }, (err, result) => {
        if (err) return next(err);
        // nModified = 0 for new item, = 1+ for updated item 
        res.json({updated: result.nModified});
    });
});

app.use((req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');    
});






// 'use strict';
// var Mushroom = require('./models/mushroom.js');
// var express = require("express");
// var app = express();



// // configure Express app
// app.set('port', process.env.PORT || 3000);
// app.use(express.static(__dirname + '/../public'));
// app.use(require("body-parser").urlencoded({extended: true}));
// app.use((err, req, res, next) => {
//   console.log(err);
// });

// // set template engine
// let handlebars =  require("express-handlebars");
// app.engine(".html", handlebars({extname: '.html', defaultLayout: 'main' }));
// app.set("view engine", ".html");

// //first word of res render in curlies, is the html, and the err, [WORD]
// app.get('/', (req,res) => {
//     Mushroom.find((err,fungi) => {
//         if (err) return (err);
//         res.render('home', {mushrooms: JSON.stringify(fungi) });    //json on this line /////////////////////////////////// 
//     });
// });

// app.get('/about', (req,res) => {
//     res.type('text/html');
//     res.render('about');
// });

// app.get('/get', (req,res,next) => {
//     Mushroom.findOne({ type:req.query.type }, (err, fungi) => {
//         if (err) return (err);
//         res.type('text/html');
//         res.render('details', {result: fungi} ); 
//     });
// });

// app.post('/get', (req,res, next) => {
//     Mushroom.findOne({ type:req.body.type }, (err, fungi) => {
//         if (err) return (err);
//         res.type('text/html');
//         res.render('details', {result: fungi} ); 
//     });
// });

// app.get('/delete', (req,res) => {
//     Mushroom.remove({ type:req.query.type }, (err, result) => {
//         if (err) return (err);
//         let deleted = result.result.n !== 0; //n will be 0 if no docs deleted
//         Mushroom.count((err, total) => {
//             if (err) return (err);
//             res.type('text/html');
//             res.render('delete', {type: req.query.type, deleted: deleted , total: total } );    
//         });
//     });
// });

// // api's
// app.get('/api/mushroom/:type', (req, res) => {
//     let type = req.params.type;
//     console.log(type);
//     Mushroom.findOne({type: type}, (err, result) => {
//         if (err || !result) return (err);
//         res.json( result );    
//     });
// });

// app.get('/api/mushroom', (req,res, next) => {
//     Mushroom.find((err,results) => {
//         if (err || !results) return next(err);
//         res.json(results);
//     });
// });

// app.get('/api/delete/:type', (req,res) => {
//     Mushroom.remove({"type":req.params.type }, (err, result) => {
//         if (err) return (err);
//         // return # of items deleted
//         res.json({"deleted": result.result.n});
//     });
// });

// app.get('/api/add/:type/:otherName/:use', (req,res, next) => {
//     //find & update existing item, or add new 
//     let type = req.params.type;
//     Mushroom.update({ type: type}, {type:type, otherName: req.params.otherName, use: req.params.use }, {upsert: true }, (err, result) => {
//         if (err) return next(err);
//         // nModified = 0 for new item, = 1+ for updated item 
//         res.json({updated: result.nModified});
//     });
// });


// // 404 handler
// app.use((req,res) => {
//     res.type('text/html'); 
//     res.status(404) ;
//     res.sendFile(__dirname + '/public/404.html');
// });
     
// app.listen(app.get('port'), function() {
//     console.log('Express started');    
// });