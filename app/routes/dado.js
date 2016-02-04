// app/routes/dados.js

module.exports = function(app) {
    var controller = app.controllers.dado;

    app.get('/api/dados/jogar', controller.jogar);
};
