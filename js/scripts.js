function ToDoList (todoItem) {
  this.todoItem = todoItem;
}
// function Student (name, class, age){
//   this.name = name;
//   this.class = class;
//   this.age = age;
// }
$(document).ready(function() {

  $(".toDoForm").submit(function(event) {
    event.preventDefault();

    var todoItem = $("input#userInput").val();

// "todoItem" below has to match the object key on line 2
    var newToDoList = new ToDoList(todoItem);

// "todoItem" below has to match the object key on line 2
  $("#userList").append("<li>" + newToDoList.todoItem + " " + "<span class='check glyphicon glyphicon-ok'></span>" + "</li>");

    $(".check").last().click(function(){
      $(this).parent().toggleClass("strikethrough");
// REPLACE LINE 25 WITH 27 TO REMOVE THE ITEM INSTEAD OF strikethrough
      // $(this).parent().remove();

      });
  });
});
