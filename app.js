
/**
 * Module dependencies.
 */

var express   = require('express')
    routes    = require('./routes'),
    register  = require('./routes/register'),
    http      = require('http'),
    path      = require('path');

var app = express();

// make sure ejs (or jade) handles html files
app.engine('html', require('ejs').renderFile);

// all environments
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
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get("/register/:variableName", register.index);


// debug start

// making sure they work on nodejs
var math = require('./public/javascripts/math.js');
var mathFail = require('./public/javascripts/mathFail.js');

console.log(math.increment(1));
console.log(mathFail.increment(1));
// debug end

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
