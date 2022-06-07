


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
 //stap 4 maak het ul leeg om te verkomen dat lijst continu wordt. tip: zie filmzoeker project.. 
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
  deleteButton.setAttribute("id", value._id)
  deleteButton.addEventListener('click', event => {
    
    console.log(event.target.id)


 
    const deleteTask = async (id) => {
      try {
        const response = await fetch(`${'http://localhost:3000'}/${'083dd380-ae55-4c8a-b047-01fdf1904693'}`, {
          method: "DELETE",
        });
        if (response.ok) {
          console.log(response.status); //204
        }
      } catch (error) {
        console.log("Task is not deleted!" + error);
      }
    }; 
    
    deleteTask();
    
   
  function removeListItemByText(text) {
      const li = [...document.querySelectorAll("li")];
      li.forEach(elem => {
        if (elem.innerText == text) elem.parentNode.removeChild(elem);
      });
    }
    
    document.getElementById("deleteButton") = function() {
      removeListItemByText("FA");
    };

// stap 1: krijg het id van het delete button 
    
 
    // stap 2 : stuur het id naar het api delete functie 
    // voorbeeld: delete(id)
    //event.preventDefault
    // stap 3: roep createDom functie aan.

    // function deleteElement() {
    //   const element = document.getElementById("submit");
    //   element.delete();
    
    //  let task_id = event.target.value
    // console.log("hello world")
    // }
    
  // function myFuncti(id) {
  //   console.log(event.target.classList) 
  //   event.preventDefault();
  //   if (event.target.classList.contains("fa-trash-alt")) {
  //      let deleteId = event.target.getAttribute("id");
  //     console.log("test")
  //      console.log(deleteId);
  //     todoList = todoList.filter((task) => {
  //       return task.id !== deleteId;
  //     });
  //     console.log(todoList);
  //  }
  // }


   //taskList.removeChild(li);
  });

  deleteButton.setAttribute("class", "far fa-trash-alt");
  buttons.appendChild(deleteButton);    //deleteButton
  listItem.appendChild(buttons);
  taskList.appendChild(listItem);
  


  });
  
  
  

   
  
};

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

  





 
  
  







 
  
  



















 
  
  


















  




 
  
  



















 
  
  


















  
