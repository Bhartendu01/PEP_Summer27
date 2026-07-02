const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList"); 

addBtn.addEventListener("click", addTask);


function addTask() {

    
    const task = taskInput.value.trim();

   
    if (task === "") {
        alert("Please enter a task!");
        return;
    }

   
    const li = document.createElement("li");

  
    li.textContent = task;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

  
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

   
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

   
    li.appendChild(deleteBtn);


    taskList.appendChild(li);


    taskInput.value = "";
}

 