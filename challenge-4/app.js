const add = document.querySelector("#addButton");
const input = document.querySelector("#taskInput");
const defaultLi = document.querySelector(".empty-list");
const tasks = document.querySelector("#taskList")
const completedTasks = document.querySelector("#completedTasks")
const allTasks = document.querySelector("#totalTasks")

let tasksCompleted = 0;
let taskList = [];
add.addEventListener("click", () => {
    console.log("click hua hai")
    console.log("input: ", input.value)
    if (input.value.length > 0) {
        defaultLi.style.display = "none"
        taskList.push(input.value);
        const li = document.createElement("li");
        li.classList.add("task-item")
        const taskText = document.createElement("span");
        taskText.innerText = input.value;
        taskText.classList.add("task-text")
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox")
        checkbox.addEventListener("click", (e) => {
            if (e.target.checked) {
                li.classList.add("completed")
                tasksCompleted++;
                completedTasks.innerText = `Completed: ${tasksCompleted}`

            } else {
                li.classList.remove("completed")
                tasksCompleted--;
                completedTasks.innerText = `Completed: ${tasksCompleted}`
            }

        })
        allTasks.innerText = `Total tasks: ${taskList.length}`
        const deleteTask = document.createElement("button");
        deleteTask.innerText = "Delete"
        deleteTask.classList.add("delete-button")
        checkbox.classList.add("complete-checkbox")
        li.appendChild(checkbox)
        li.appendChild(taskText);
        li.appendChild(deleteTask)

        tasks.appendChild(li)
        input.value = ""


        deleteTask.addEventListener("click", () => {

            if (tasksCompleted > 0) {
                tasksCompleted--;
                completedTasks.innerText = `Completed: ${tasksCompleted}`
            }
            taskList.splice(tasks.innerText, 1)
            allTasks.innerText = `Total tasks: ${taskList.length}`
            tasks.removeChild(li)
            if(taskList.length === 0){
                defaultLi.style.display = "block"
            }
        })
    }

})
