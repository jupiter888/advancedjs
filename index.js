var http = require("http");
var fs = require('fs');

// function serveStatic(res, path, contentType, responseCode){
//   if(!responseCode) responseCode = 200;
//   fs.readFile(__dirname + path, function(err, data){
//       if(err){
//         res.writeHead(500, {'Content-Type': 'text/plain'});
//         res.end('Internal Server Error');
//       }
//       else{
//         res.writeHead(responseCode, {'Content-Type': contentType});
//         res.end(data);
//       }
//   });
// }

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
  console.log('server up')
});

//node -v to see the node version being run
