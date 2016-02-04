// app/controllers/dados.js

module.exports = function(app) {
    var controller = {};
    
    var Dado = require("../models/dado");
    var dado1 = new Dado();
    var dado2 = new Dado();

    controller.jogar = function(requisicao, resposta) {
        resposta.status(200).json( {"valores": [dado1.rolar(),dado2.rolar()]} ).end();
    };

    return controller;
}
