$(document).ready(function(){

  var view = new TodoApp.View('table#tasks tbody');
  var controller = new TodoApp.Controller(view);
  view.controller = controller;
  controller.view = view;

});
