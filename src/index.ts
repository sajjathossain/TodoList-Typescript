
const addBtn = document.querySelector("#add")!;
const task = document.querySelector("#task")! as HTMLInputElement;
const showTask = document.querySelector("#add-task")!;
const doneBTN = document.querySelectorAll("button")!;
const deleteBTN = document.querySelector(".deleteBTN")!;

interface objectTypes {
    taskVal: string,
    isDone: string
}

let taskList: Array<objectTypes> = [];

function addTask() {
        let obj: objectTypes = {
            taskVal: "",
            isDone: ""
        }

        obj["taskVal"] = (task.value).toString();
        obj['isDone'] = "";


        taskList.push(obj);

        displayTasks();        
        
        
}


function doneTask(taskId: number) {
    taskList[taskId]["isDone"] = "disabled";
    document.getElementById(`${taskId}`)!.style.opacity = '0.5';
    document.getElementById(`${taskId}`)!.style.pointerEvents = 'none';
    console.log(taskId);
    console.log(taskList[taskId]["isDone"]);
}


function deleteTask(Id: number) {
    if (taskList[Id]['isDone'] === "disabled") {
        taskList.splice(Id, 1);
        displayTasks();
    } else {
        const confirmation = prompt("Do you really wanna delete? y/n ")!;
        if (confirmation.toLowerCase() === "y") {
            taskList.splice(Id, 1);
            displayTasks();
        }
    }
    console.log(Id);
    console.log(taskList);
}

function displayTasks() {
    let output: string = "";
    taskList.forEach((el) => {
        
        output += `
        <div class="col-md-12 col-lg-12 border border-success mt-2 p-2 rounded infos">
            <div class="h5 text-warning">Task ${(taskList.indexOf(el) + 1)}</div>
            <div class="descAndButt">
                <div class="d-flex flex-row">
                    <div class="p text-secondary">Task Description :</div>
                    <div class="p text-success ml-2">${el.taskVal}</div>
                </div>
                <div class="d-flex flex-row mb-3">
                    <button class="btn btn-info mr-2 ${el['isDone']} " id="${taskList.indexOf(el)}" onClick="doneTask(this.id)">Done</button>
                    <button class="btn btn-danger deleteBTN" id="${taskList.indexOf(el)}" onClick="deleteTask(this.id)">Delete</button>
                </div>
                
            </div>
        </div>
        `;
         
    });

    task.value = "";
    showTask.innerHTML = output;
        
}


document.addEventListener("DOMContentLoaded", () => {

    console.log("Connected perfectly....");

    addBtn.addEventListener("click", () => {

        if (task.value !== "") {
            addTask();
        } else {
            alert("Please add some text!");
        }
    });

});