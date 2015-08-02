$(document).ready(function(){

  var controller = new TodoApp.Controller();
  var view = new TodoApp.View('table#tasks tbody');
  view.controller = controller
  controller.view = view;

});
