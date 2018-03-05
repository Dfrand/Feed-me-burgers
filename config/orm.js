var connection = require('./connection.js');

var orm = {
    all: function (tableInput, cd) {
        connection.query('SELECT * FROM ' + tableInput + ';', function (err, result) {
            if (err) throw err;
            cd(result);
        });
    }
}

module.exports = orm;