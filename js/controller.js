TodoApp.Controller = function(view) {
  this.list = new TodoApp.TodoList();
  this.view = view;

TodoApp.Controller.prototype.addTask = function(taskProps) {
  this.list.addTask(new TodoApp.Task(taskProps));
  this.view.showTasks(this.list);

}

}
