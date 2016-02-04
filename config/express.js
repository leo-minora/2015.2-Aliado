// config/express.js

var express = require('express');
var load = require('express-load');

module.exports = function() {
    var app = express();

    app.port = 3000;

    // load('models', {cwd: 'app'})
    //     .then('controllers')
    //     .then('routes')
    //     .into(app);
    load('controllers', {cwd: 'app'})
        .then('routes')
        .into(app);

    return app;
}
