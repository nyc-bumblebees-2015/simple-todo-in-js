TodoApp.Controller = function(view) {
  var stored = TodoApp.TodoList.load();
  this.list = new TodoApp.TodoList();
  if (stored) {
    this.list.tasks = stored.tasks;
  }
  this.view = view;
  view.showTasks(this.list);
}

TodoApp.Controller.prototype.addTask = function(taskProps) {
  this.list.addTask(new TodoApp.Task(taskProps));
  this.view.showTasks(this.list);

}
