function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = input.value;

  // Mark as completed
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "delete-btn";

  delBtn.onclick = function (event) {
    event.stopPropagation(); // prevent complete toggle
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

// Add task using Enter key
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

