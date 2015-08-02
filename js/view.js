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
    html += '  <td class="task_created_at">' + task.created_at + '</td>' ;
    html += '</tr>' ;
  });
  console.log(html);
  this.$tableBody.html(html);

};