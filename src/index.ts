const addBtn = document.querySelector("#add")!;
const task = document.querySelector("#task")! as HTMLInputElement;
const showTask = document.querySelector("#add-task")!;
const doneBTN = document.querySelector(".doneBTN")!;
const deleteBTN = document.querySelector(".deleteBTN")!;

let taskList: string[] = [];


function addTask() {
    if (task.value !== "") {
        
        let output: string = "";
        taskList.push(task.value);

        taskList.forEach((el) => {
            output += `
                <div class="col-md-12 col-lg-12 border border-success p-2 rounded infos">
                    <div class="h4 text-warning">Task ${(taskList.indexOf(el) + 1)}</div>
                    <hr class="bg-success">
                    <div class="h5">
                        <div class="d-flex flex-row">
                            <div class="h5 text-secondary">Task Description :</div>
                            <div class="h5 text-success ml-2">${el}</div>
                        </div>
                        <div class="d-flex flex-row mt-2 float-right">
                            <button class="btn btn-info mr-2 doneBTN">Done</button>
                            <button class="btn btn-danger deleteBTN">Delete</button>
                        </div>
                        
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