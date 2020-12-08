
const addBtn = document.querySelector("#add")!;
const task = document.querySelector("#task")! as HTMLInputElement;
const showTask = document.querySelector("#add-task")!;
const doneBTN = document.querySelector(".doneBTN")!;
const deleteBTN = document.querySelector(".deleteBTN")!;


interface objectTypes {
    taskVal: string,
    isDone: boolean
}


let taskList: Array<objectTypes> = [];



function addTask() {
    if (task.value !== "") {
        
        let obj: objectTypes = {
            taskVal: "",
            isDone: false
        }
        let output: string = "";

        obj["taskVal"] = (task.value).toString();
        obj['isDone'] = false;


        taskList.push(obj);

        taskList.forEach((el) => {
            output += `
                <div class="col-md-12 col-lg-12 border border-success mt-2 p-2 rounded infos">
                    <div class="h4 text-warning">Task ${(taskList.indexOf(el) + 1)}</div>
                    <div class="h5">
                        <div class="d-flex flex-row">
                            <div class="h5 text-secondary">Task Description :</div>
                            <div class="h5 text-success ml-2">${el.taskVal}</div>
                        </div>
                        <span class="d-flex flex-row mt-2 float-right">
                            <button class="btn btn-info mr-2 doneBTN">Done</button>
                            <button class="btn btn-danger deleteBTN">Delete</button>
                        </span>
                        
                    </div>
                </div>
                `;
            
        });
        
        showTask.innerHTML = output;
        
    }else {
        alert("Please add some text!");
    }
        
}




document.addEventListener("DOMContentLoaded", () => {

    console.log("Connected perfectly....");

    addBtn.addEventListener("click", () => {

        addTask();

    });

});