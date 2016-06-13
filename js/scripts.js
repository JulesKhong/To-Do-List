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
    debugger;
    var todoItem = $("input#userInput").val();

// "todoItem" below has to match the object key on line 2
    var newToDoList = new ToDoList(todoItem);

// "todoItem" below has to match the object key on line 2
  $("#userList").append("<li>" + newToDoList.todoItem + "</li>");

  });
});
