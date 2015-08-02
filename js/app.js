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
