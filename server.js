// let http = require('http');
// let server = new http.Server();
//var express = require('express')

//var favicon = require('serve-favicon')
//var path = require('path')

let url = require('url');

let server = new require('http').Server();
let puts = require('./outputs').puts;

// var app = express()
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

server.listen(8081, '127.0.0.1');

/*let emit = server.emit;

server.emit = function(event /!* arg1, arg2 *!/) {
  console.log(event);
  emit.apply(server, arguments);
}

*/

server.on('request', (req, res) => {
  let urlParsed = url.parse(req.url, true);

  // res.writeHead(200, {'Content-Type': 'text/plain'});

  if(urlParsed.pathname == "/supervisor") {
    res.end('Supervisor');
  }

  if (urlParsed.pathname == "/echo" && urlParsed.query.msg) {
    res.setHeader('Cache-Control', 'no-cache');
    res.end("Hello world! " + urlParsed.query.msg);
  } else {
    puts(urlParsed);
    res.statusCode = 404;
    res.end("Page not found");
  }
});