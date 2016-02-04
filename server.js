// server.js

var http = require('http');

var application = require('./config/express');
var app = application();

var server = http.createServer(app);
server.listen(app.port, function() {
    console.log('Servidor de jogos iniciado!');
    console.log('Port ' + app.port);
    console.log('Aguardando requisições clientes...');
});
