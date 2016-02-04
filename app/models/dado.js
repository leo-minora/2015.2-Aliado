// app/models/dado.js

var dado = function() {
};

dado.prototype.rolar = function() {
    return Math.floor(Math.random()*6) + 1;
};

module.exports = dado;
