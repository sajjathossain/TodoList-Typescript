"use strict";
var addBtn = document.querySelector("#add");
var task = document.querySelector("#task");
var showTask = document.querySelector("#add-task");
var doneBTN = document.querySelector(".doneBTN");
var deleteBTN = document.querySelector(".deleteBTN");
var taskList = [];
function addTask() {
    if (task.value !== "") {
        var output_1 = "";
        taskList.push(task.value);
        taskList.forEach(function (el) {
            output_1 += "\n                <div class=\"col-md-12 col-lg-12 border border-success p-2 rounded infos\">\n                    <div class=\"h4 text-warning\">Task " + (taskList.indexOf(el) + 1) + "</div>\n                    <hr class=\"bg-success\">\n                    <div class=\"h5\">\n                        <div class=\"d-flex flex-row\">\n                            <div class=\"h5 text-secondary\">Task Description :</div>\n                            <div class=\"h5 text-success ml-2\">" + el + "</div>\n                        </div>\n                        <div class=\"d-flex flex-row mt-2 float-right\">\n                            <button class=\"btn btn-info mr-2 doneBTN\">Done</button>\n                            <button class=\"btn btn-danger deleteBTN\">Delete</button>\n                        </div>\n                        \n                    </div>\n                </div>\n                ";
        });
        showTask.innerHTML = output_1;
    }
    else {
        alert("Please add some text!");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("Connected perfectly....");
    addBtn.addEventListener("click", function () {
        addTask();
    });
});
