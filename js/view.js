TodoApp.View = function($tableBody) {

  this.$tableBody = $tableBody;

};

TodoApp.View.prototype.showTasks = function(todoList) {
  var html = "";
  todoList.tasks.forEach(function(task) {
    html += '<tr id="task' + task.id + 'row">' ;
    html += '  <td class="task_id">' + task.id + '</td>' ;
    html += '  <td class="task_description">' + task.description + '</td>' ;
    html += '  <td class="task_done"><input type="checkbox" id="task' + task.id + 'done">' + (task.done ? ' checked ' : '') + '</td>' ;
    html += '  <td class="task_created_at">' + moment(task.created_at).format("MMM Do, h:mm:ss a") + '</td>' ;
    html += '</tr>' ;
  });
  this.$tableBody.html(html);
};