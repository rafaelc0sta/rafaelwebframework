var express     = require('express');
var app         = express();

var config      = require('./config');

var renderer    = require('./renderer');
var logger      = require('./logger');
var router      = require('./router');

renderer.register(app);

app.use(logger.requestLogger);

app.use('/static', express.static('static'));

router.route(app);
app.listen(config.port);
