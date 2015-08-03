TodoApp.View = function($tableBodySelector) {

  this.$tableBody = jQuery($tableBodySelector);
  this.setupHandlers();

};

TodoApp.View.prototype.showTasks = function(todoList) {
  var html = "";
  todoList.tasks.forEach(function(task) {
    html += '<tr id="task' + task.id + 'row">' ;
    html += '  <td class="task_id">' + task.id + '</td>' ;
    html += '  <td class="task_description">' + task.description + '</td>' ;
    html += '  <td class="task_done"><input type="checkbox" data-task-id=' + task.id + (task.done ? ' checked ' : '') + '></td>' ;
    html += '  <td class="task_created_at">' + moment(task.created_at).format("MMM Do, h:mm:ss a") + '</td>' ;
    html += '</tr>' ;
  });
  console.log(todoList);
  console.log(this.$tableBody);
  this.$tableBody.html(html);
};

TodoApp.View.prototype.setupHandlers = function() {

  $('form#add_task_form').on('submit', function(event) {
    event.preventDefault();
    var description = $('#description').val();
    var done = !!($('#done').prop('checked'));
    this.controller.addTask({description: description, done:done});
  }.bind(this));

  $('table').on('change', '.task_done input', function(event){
    console.log(event.target);
    if (event.target.dataset.taskId) {
      this.controller.completeTask(event.target.dataset.taskId);
    }
  }.bind(this));
};