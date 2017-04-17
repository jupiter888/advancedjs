
var http=require("http"), fs = require ('fs'), qs = require("querystring"), books=require("./class/books")


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
  //query params
  //this below is the full url requested
  //     /search?title=dune
  //splits on question mark
  var url = req.url.split("?")
  //returns array with two items in it
  //["/search","title=dune"]
  //    0           1
  var params = qs.parse(url[1]);
  console.log(params)
  var path = url[0].toLowerCase();
  switch(path) {
    
    case 'http://localhost:3000': 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('/public/home.html');
      break;
    case '/search':
      console.log(books.get(params.title))
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('search for' + params.title);
      break;
    case '/add': 
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('add');
      break;
      
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404:Page not found.');
  }
  
}).listen(process.env.PORT || 3000, function(){
  console.log('server up')
});
//steps 
//define module called books
