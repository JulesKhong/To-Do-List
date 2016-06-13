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
  $("#userList").append("<li>" + newToDoList.todoItem + " " + "<span class='completed-button glyphicon glyphicon-ok'></span>" + "</li>");

    $(".completed-button").last().click(function(){
      $(this).parent().toggleClass("strikethrough");
// REPLACE LINE 25 WITH 27 TO REMOVE THE ITEM INSTEAD OF strikethrough
      // $(this).parent().remove();

      });
    // });

  });
  });

// });


//TANGENT EXPLORING A SOLUTION
//   function jAdd() {
//     $("#userList").append("<li><input type='checkbox'>" + newToDoList.todoItem + "</li>");
//   }
//   jAdd(newToDoList.todoItem);
//

//
//     function jRem() {
//       $("#userList").children(function () {
//           return this.checked;
//       }) .remove();
//   }
// jRem(newToDoList.todoItem);




  //
  // $("#buttonItem").submit(function(event){
  //   debugger;
    // $(this).empty();
    // $("ul#thisTask").empty();
