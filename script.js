const url = 'http://localhost:3000';
const taskList = document.getElementById("list");

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
   console.log(data)
  data.forEach(value => {
    const listItem = document.createElement("li"); // Create li element.
    const task = document.createElement("p"); // Create p element.
    const text = document.createTextNode(value.description); // Create text for list item.
  listItem.innerHTML = value.description;
  const buttons = document.createElement("div");  // 
  buttons.setAttribute("class", "buttons");
  const deleteButton = document.createElement("button"); 
  deleteButton.setAttribute("class", "far fa-trash-alt");
  buttons.appendChild(deleteButton);    //deleteButton
  listItem.appendChild(buttons);
   taskList.appendChild(listItem);

  });
  
  //Create button section
  

   
  
}

  // Add new list item to list
    // const list = document.getElementById('list');
    // list.appendChild(listItem);
    // console.log(value)
  
  createDom()


// Creating a new task
const button = document.getElementById("submit");
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


  





 
  
  



















 
  
  


















  
