var express = require('express');
var ejs = require('ejs');
var app = express();
var path = require('path');

// disable view-caching
app.disable('view cache');

// config template engine
app.set('views', path.join(__dirname, '../client/templates'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// serve static files
app.use(express.static('public'));

// routes
app.use('/api',require('./api'));
app.use('/', require('./www'));

app.listen(3000, function () {
  console.log('rest api server listening on port 3000!');
});