const addBtn = document.querySelector("#add")!;
const task = document.querySelector("#task")! as HTMLInputElement;
const showTask = document.querySelector("#add-task")!;

let taskList: string[] = [];

document.addEventListener("DOMContentLoaded", () => {

    console.log("Connected perfectly....");

    addBtn.addEventListener("click", () => {
        if (task.value !== "") {
            
            let output: string = "";
            taskList.push(task.value);

            taskList.forEach((el) => {
                output += `
                    <div class="col s12">
                    <div class="card blue-grey darken-1 hoverable">
                        <div class="card-content white-text">
                        <span class="text-card-title text-white h3">Task ${(taskList.indexOf(el) + 1)}</span>
                        <h2 class="text-blue">${el}</h2>
                        </div>
                        <div class="card-action">
                        <button class="btn blue hoverable">Done</button>
                        <button class="btn red hoverable">Delete</button>
                        </div>
                    </div>
                    `;
                
            });
            
            showTask.innerHTML = output;
            
        }else {
            alert("Please add some text!");
        }
        
    });

});