
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

app.get('/shop', function(req, res) {
  var http = require('http');
  
  var host= 'api.doko.jp';
  var dir = '/v1/searchPOI.do?key=&lt;取得したキー&gt;&amp;format=json';  // 今回はJSONを使います

  var json = '';
  var request = http.createClient(80, host).request('GET', dir, {'HOST': host});
  request.addListener('response', function(response) {
    response.setEncoding('utf-8');
    response.addListener('data', function(chunk) {
      json += chunk;
    });
    response.addListener('end', function() {
      var results = JSON.parse(json);
      res.render('shop', {title: 'Shop', results: results});
    });
  });
  request.end();
});
