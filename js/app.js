TodoApp = {};

TodoApp.Task = function(options){
  options = options || {};
  this.id = options.id;
  this.description = options.description;
  this.done = options.done || false;
  this.created_at = options.created_at || new Date();
  this.completed_at = options.completed_at;
};

TodoApp.Task.prototype.markComplete = function() {
  if (!this.done) {
    this.done = true;
    this.completed_at = new Date();
  }
};

TodoApp.TodoList = function(tasks){
  this.tasks = tasks;
};

TodoApp.TodoList.prototype.addTask = function(task){
  this.tasks.push(task);
};

TodoApp.TodoList.prototype.findTask = function(target){
  var arr = this.tasks.filter(function(element){
    return element.id === target.id;
  });

  if (arr && arr.length > 0 ) {
    return arr[0];
  }

};
