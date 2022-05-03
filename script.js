// Creating a new task
var button = document.getElementById("submit");


button.addEventListener("click", () => {
  let taskInput = document.getElementById("task").value;
  // Creating the text for list item.
  if (taskInput === "") {
    // Prevents empty list item.
    alert("You have to type a task!");
  } else {
    var listItem = document.createElement("li"); // Create li element.
    var task = document.createElement("p"); // Create p element.
    var text = document.createTextNode(taskInput); // Create text for list item.
    task.appendChild(text); // Append text to p element.
    listItem.appendChild(task); // Append p to list item.
  }


  // Create a delete button
  var deleteButton = document.createElement("button");
  var editButton = document.createElement("delete");
  deleteButton.innerHTML = "delete";
  deleteButton.setAttribute("class", "btn delete");

  
  //Create button section
  var buttons = document.createElement("div"); // 
  buttons.setAttribute("class", "buttons");
 
  buttons.appendChild(deleteButton);    //deleteButton
  listItem.appendChild(buttons);

    deleteButton.addEventListener('click', function () {
    console.log(this);
    console.log(this.parentElement.parentElement);
    var parent = this.parentElement.parentElement;
    parent.parentElement.removeChild(parent);
  });
  //Add new list item to list
  var list = document.getElementById("list");
  list.appendChild(listItem);
});
















