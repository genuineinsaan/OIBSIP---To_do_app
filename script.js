function addTask() {
  const title = document.getElementById("taskTitle").value.trim();
  const desc = document.getElementById("taskDesc").value.trim();

  if (title === "" || desc === "") {
    alert("Please fill in both fields.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.className = "task";
  taskItem.innerHTML = `
    <strong>${title}</strong><br>
    <small>${desc}</small>
    <div class="task-actions">
      <button class="complete-btn" onclick="markComplete(this)">✓ Complete</button>
      <button class="delete-btn" onclick="deleteTask(this)">✖ Delete</button>
    </div>
  `;

  document.getElementById("pendingList").appendChild(taskItem);

  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";
}

function markComplete(button) {
  const taskItem = button.parentElement.parentElement;
  button.remove();
  document.getElementById("completedList").appendChild(taskItem);
}

function deleteTask(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.remove();
}
