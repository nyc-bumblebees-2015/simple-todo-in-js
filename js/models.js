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
  tasks = tasks || [];
  this.tasks = tasks;
};

TodoApp.TodoList.prototype.assignTaskNumbers = function() {
  var ids = this.tasks.map(function(ele){
    return ele.id ? ele.id :0 ;
  });
  ids.push(0);

  var max = Math.max.apply(null, ids);
  this.tasks.forEach(function(task){
    if(!task.id) {
      task.id = max + 1;
      max++;
    }
  });
};

TodoApp.TodoList.prototype.addTask = function(task){
  this.tasks.push(task);
  this.assignTaskNumbers();
  this.save();
};

TodoApp.TodoList.prototype.findTask = function(target){
  var arr = this.tasks.filter(function(element){
    return element.id === target.id;
  });

  if (arr && arr.length > 0 ) {
    return arr[0];
  }
};

TodoApp.TodoList.prototype.save = function() {
  localStorage.setItem('todo_list', JSON.stringify(this));
};

TodoApp.TodoList.load = function() {
  return JSON.parse(localStorage.getItem('todo_list'));
};