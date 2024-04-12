function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  var date = new Date();
  var dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  var taskList = document.getElementById("taskList");
  var newTask = document.createElement("li");
  newTask.innerHTML = `<span class="taskText incomplete">${taskText} - ${dateString}</span>
                        <button onclick="editTask(this)">Edit</button>
                        <button onclick="markComplete(this)">Mark Complete</button>
                        <button onclick="deleteTask(this)">Delete</button>`;
  taskList.appendChild(newTask);

  taskInput.value = "";
}

function editTask(button) {
  var taskText = button.previousElementSibling.textContent.split(" - ")[0];
  var newTaskText = prompt("Edit task:", taskText);
  if (newTaskText !== null) {
    button.previousElementSibling.textContent = newTaskText;
  }
}

function markComplete(button) {
  var taskText = button.previousElementSibling.previousElementSibling.textContent;
  var taskSpan = button.previousElementSibling.previousElementSibling;
  if (!taskSpan.classList.contains("complete")) {
    taskSpan.classList.remove("incomplete");
    taskSpan.classList.add("complete");
  } else {
    taskSpan.classList.remove("complete");
    taskSpan.classList.add("incomplete");
  }
}

function deleteTask(button) {
  var task = button.parentElement;
  task.parentElement.removeChild(task);
}
