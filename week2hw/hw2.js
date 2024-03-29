//HOMEWORK 2 also uses the books.js module located in: ./class/books.js
var http=require("http"), fs = require ('fs'), qs = require("querystring"), books=require("./class/books")



//this fn helps when using http
function serveStatic(res, path, contentType, responseCode){
  if(!responseCode) responseCode = 200;
  fs.readFile(__dirname + path, function(err, data){
      if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Internal Server Error');
      }
      else{
        res.writeHead(responseCode, {'Content-Type': contentType});
        res.end(data);
      }
  });
}

http.createServer(function(req,res){
  //splits on question mark
  var url = req.url.split("?")
  //returns array with two items in it
  //["/search","title=dune"]
  //    0           1
  //  example   /search?title=it
  var params = qs.parse(url[1]);
  var way = url[0].toLowerCase();
  switch(way) {
    case '/': 
      serveStatic(res,'/public/home.html','text/html');
      break;
      
    case'/about':
      serveStatic(res,'/public/about.html','text/html');
      break;
      
    case '/search':
      //receive info from books module
      var result = books.get(params.title);
      if (result){
        var msg = "Title: "+ result.title +'<BR>'+ ' Author: ' + result.author +'<BR>'+ ' Publish Date: ' + result.pubdate;
      }else{
        var msg="not found";
      };
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('Search for ' + params.title + "<br>" + msg ); 
      break;
      
    case '/add':
      //receive info from books module
      var result = books.add(params.title, params.author, params.pubdate);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(result);
      break;
      
    case '/delete': 
      //receive info from books module
      var result = books.delete(params.title);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(result);
      console.log(books.len + "books remaining");
      break;
      
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000, function(){
  console.log('server up');
});
//steps i took
//define module called books
//define functions for get, delete, add items from array
//each of those functions communcating with the index2.js module
//installed querystring
//used writehead to print on line 46
//serveStatic made most of this possible, was getting errors before i included this
//
