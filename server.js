var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan'); 


var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));


app.use(express.static(process.cwd() + '/public'));


if(process.env.NODE_ENV == 'production'){

  mongoose.connect('mongodb://heroku_kbdv0v69:860jh71jd1iu5m5639gjr0gg9l@ds129028.mlab.com:29028/heroku_kbdv0v69');
}
else{
  mongoose.connect('mongodb://localhost/nytreact');
}
var db = mongoose.connection;


db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});


db.once('open', function() {
  console.log('Mongoose connection successful.');
});


var Article = require('./models/Article.js');


var router = require('./controllers/controller.js');
app.use('/', router);


var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});