function createTaskElement(taskText) {
    var li = document.createElement("li");
    var taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function () {
        var newTaskText = prompt("Enter new task text", taskText);
        if (newTaskText) {
            taskTextElement.textContent = newTaskText;
        }
    });
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(taskTextElement);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    return li;
}
var addTask = function () {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText === "")
        return;
    var taskList = document.querySelector(".taskList");
    console.log("taskList", taskList);
    var taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);
    taskInput.value = "";
};
document.addEventListener("DOMContentLoaded", function () {
    var inputContainer = document.getElementById("input-container");
    // console.log("inputContainer", inputContainer)
    inputContainer.addEventListener("submit", function (event) {
        event.preventDefault();
        // console.log("submit")
        addTask();
    });
});
