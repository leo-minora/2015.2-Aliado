// config/express.js

var express = require('express');
var load = require('express-load');

module.exports = function() {
    var app = express();

    app.port = 3000;

    app.use(function (req, res, next) {
        // habilitando o CORS
        // problema que esta disponível a todos os sites
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        next();
    });

    load('controllers', {cwd: 'app'})
        .then('routes')
        .into(app);

    return app;
}
