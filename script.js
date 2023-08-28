const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText == "sexo"){
    const semSexo = confirm("não")
  }

  else if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <div class="buttons">
        <button class="edit">✏️</button>
        <button class="delete">🗑️</button>
      </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    const editButton = li.querySelector(".edit");
    const deleteButton = li.querySelector(".delete");

    editButton.addEventListener("click", () => editTask(li, taskText));
    deleteButton.addEventListener("click", () => deleteTask(li));
  }
  
}

function editTask(li, taskText) {
  const newText = prompt("editar tarefa:", taskText);
  if (newText !== null && newText.trim() !== "") {
    li.querySelector("span").textContent = newText.trim();
  }
}

function deleteTask(li) {
  const confirmDel = confirm("excluir tarefa?")
  if (confirmDel) { 
    li.remove();
  }
}
