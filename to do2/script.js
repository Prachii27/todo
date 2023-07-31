function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;
  
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerText = taskText;
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
      taskList.removeChild(newTask);
    };
    
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
  