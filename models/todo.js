


// define model =================

var connect = require('../dbURL/dbURL');
var mongoose = require('mongoose');                     // mongoose for mongodb

connect(mongoose);

var Todo = mongoose.model('Todo', {
    text : String
});

module.exports = Todo;
