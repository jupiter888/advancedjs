var http = require('http');
var fs =require('fs');
var mongoose= require('mongoose');



http.createServer(function(req,res){
  var path = req.url.toLowerCase();
  switch(path) {
    case '/': 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('/public/home.html');
      break;
    case 'http://localhost:3000/about':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('/public/about.html');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000, function(){
  console.log('Server is up!');
});

