const addBtn = document.querySelector("#add")!;
const task = document.querySelector("#task")! as HTMLInputElement;
const showTask = document.querySelector("#add-task")!;
const doneBTN = document.querySelectorAll("button")!;
const deleteBTN = document.querySelector(".deleteBTN")!;

// User defined data type
interface objectTypes {
    taskVal: string,
    isDone: string
}



// function to add new task
function addTask() {
    let obj: objectTypes = {
        taskVal: "",
        isDone: ""
    }

    obj["taskVal"] = (task.value).toString();
    obj['isDone'] = "";

    const localStorageLength = window.localStorage.length
    localStorage.setItem(`${localStorageLength}`, JSON.stringify(obj));


    // console.log(localStorage);


    displayTasks();        
                
}


// function to define a task as finished
function doneTask(taskId: number) {

    const key: string = localStorage.key(taskId)!;
    const localStorageToObject: objectTypes = JSON.parse(localStorage.getItem(key)!)!;
    
    localStorageToObject["isDone"] = "disabled";
    localStorage.setItem(`${taskId}`, `${JSON.stringify(localStorageToObject)}`);
    
    document.getElementById(`${taskId}`)!.style.opacity = '0.5';
    document.getElementById(`${taskId}`)!.style.pointerEvents = 'none';
    
    // console.log(taskId);
    // console.log(localStorageToObject["isDone"]);

}


// Function to delete a task
function deleteTask(Id: number) {

    const key: string = localStorage.key(Id)!;
    const localStorageToObject: objectTypes = JSON.parse(localStorage.getItem(key)!)!;
    

    if (localStorageToObject['isDone'] === "disabled") {
        localStorage.removeItem(`${Id}`);
        
        displayTasks();
    } else {
        const confirmation = prompt("Do you really wanna delete? y/n ")!;
    
        if (confirmation.toLowerCase() === "y") {
            localStorage.removeItem(`${Id}`);
            displayTasks();
        }
    }

    // console.log(Id);
}


// Function to display all available tasks
function displayTasks() {

    let output: string = "";

    if (localStorage.length === 0) {
        localStorage.clear();
        document.getElementById("error")!.style.display = "block";      
    } else {
        document.getElementById("error")!.style.display = "none";
        output = "";
        for (let el = 0; el < localStorage.length; el++) {
            const key: string = localStorage.key(el)!;
            const localStorageToObject: objectTypes = JSON.parse(localStorage.getItem(key)!)!;
        
            output += `
        <div class="col-md-12 col-lg-12 col-md-12 col-sm-12 border border-success mt-2 p-2 rounded infos">
            <div class="h5 text-warning">Task ${el + 1}</div>
            <div class="descAndButt">
                <div class="d-flex flex-row">
                    <div class="p text-secondary">Task Description :</div>
                    <div class="p text-success ml-2">${localStorageToObject["taskVal"]}</div>
                </div>
                <div class="d-flex flex-row mb-3">
                    <button class="btn btn-info mr-2 ${localStorageToObject['isDone']} " id="${`${el}`}" onClick="doneTask(this.id)">Done</button>
                    <button class="btn btn-danger deleteBTN" id="${`${el}`}" onClick="deleteTask(this.id)">Delete</button>
                </div>
                
            </div>
        </div>
        `;
         
        };
    }

    task.value = "";
    showTask.innerHTML = output;
        
}


// start position
document.addEventListener("DOMContentLoaded", () => {


    console.log("Connected perfectly....");

    displayTasks();

    addBtn.addEventListener("click", () => {

        if (task.value !== "") {
            addTask();
        } else {
            alert("Please add some text!");
        }
    });

});