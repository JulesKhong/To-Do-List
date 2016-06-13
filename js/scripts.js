function ToDoList () {
  this.listItem = [];
}

$(document).ready(function() {

  $("form#toDoForm").submit(function(event) {
    event.preventDefault();
    var todoItem = $("input#userInput").val();

    var finalToDoList = new ToDoList;
    finalToDoList.listItem.push(todoItem);
    console.log(todoItem);
    debugger;
    // var newToDoList = ToDoList.listItem.push([todoItem])
  //   $(".add-toDoList").each(function() {
  //     var inputtedStreet = $(this).find("input.new-street").val();
  // });

  $("ul#userList").append("<li><span class='item'>" + finalToDoList.listItem + "</span></li>");

  });
});
