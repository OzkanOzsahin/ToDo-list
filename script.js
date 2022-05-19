

const url = 'http://localhost:3000';



// POST request

const postData = async (value) => {
 
const data = {description: value, done: false};

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}; 

//GET Request
const getData = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}; 
getData()

async function createDom() {
  
  const data = await getData();
  console.log(data);
  data.forEach(value => {
    const listItem = document.createElement("li"); // Create li element.
    const task = document.createElement("p"); // Create p element.
    const text = document.createTextNode(value.description); // Create text for list item.
  });
    // comment: Get value._id put in paragraphs element.
    // comment: <p id="value._id"> eten </p>
    //const para = document.createElement("p");
   // const node = document.createTextNode("This is a paragraph.");
    //para.appendChild(text); // Append text to p element.
   // document.getElementById("myDIV").appendChild(para);
    //listItem.appendChild(task); // Append p to list item.
    // Create a delete button
  var deleteButton = document.createElement("button");
  var deleteButton = document.createElement("delete");
  deleteButton.setAttribute("class", "far fa-trash-alt");

  
  //Create button section
  var buttons = document.createElement("div"); // 
  buttons.setAttribute("class", "buttons");
 
  buttons.appendChild(deleteButton);    //deleteButton
  listItem.appendChild(buttons);


  // comment: stuur id naar functie delete data

  fetch('http://localhost:3000', {
    method: "DELETE",
    headers: {
        'Content-type': 'application/json'
    }
})
.then(res => {
    if (res.ok) { console.log("HTTP request successful") }
    else { console.log("HTTP request unsuccessful") }
    return res
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))

    deleteButton.addEventListener('click', function () {
    console.log(getData);
    console.log(this.parentElement.parentElement);
    var parent = this.parentElement.parentElement;
    parent.parentElement.removeChild(parent);
  });
  //Add new list item to list
  var list = document.getElementById("list");
  list.appendChild(listItem);
    console.log(value) 
};


createDom()

// Creating a new task
var button = document.getElementById("submit");
button.addEventListener("click", () => {
  let taskInput = document.getElementById("task").value;
  // Creating the text for list item.
  if (taskInput === "") {
    // Prevents empty list item.
    alert("You have to type a task!");
  } else {
    
    
    postData(taskInput);
    createDom();
  }


  
});




 
  
  



















 
  
  



















