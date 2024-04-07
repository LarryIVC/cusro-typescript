function createTaskElement(taskText:string) {
  var li = document.createElement("li")
  var taskTextElement = document.createElement("span")
  taskTextElement.textContent = taskText
  var editButton = document.createElement("button")
  editButton.textContent = "Edit"
  editButton.addEventListener("click", () => {
    var newTaskText = prompt("Enter new task text", taskText)
    if (newTaskText) {
      taskTextElement.textContent = newTaskText
    }
  })
  var deleteButton = document.createElement("button")
  deleteButton.textContent = "Delete"

  deleteButton.addEventListener("click", () => {
    li.remove()
  })

  li.appendChild(taskTextElement)
  li.appendChild(editButton)
  li.appendChild(deleteButton)

  return li
}

const addTask = () => {
  const taskInput = document.getElementById("taskInput") as HTMLInputElement
  const taskText = taskInput.value.trim()
  if (taskText === "") return
  const taskList = document.querySelector(".taskList") as HTMLUListElement
  console.log("taskList", taskList)
  const taskElement = createTaskElement(taskText)
  taskList.appendChild(taskElement)
  taskInput.value = ""
}

document.addEventListener("DOMContentLoaded", () => {
  const inputContainer = document.getElementById("input-container") as HTMLFormElement
  // console.log("inputContainer", inputContainer)
  inputContainer.addEventListener("submit", (event) => {
    event.preventDefault()
    // console.log("submit")
    addTask()
  }) 
})