var connect = function(mongoose){
  mongoose.connect('mongodb://localhost/todo-tutorial/data');
}

module.exports = connect;
