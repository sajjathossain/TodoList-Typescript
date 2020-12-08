"use strict";
var addBtn = document.querySelector("#add");
var task = document.querySelector("#task");
var showTask = document.querySelector("#add-task");
var doneBTN = document.querySelectorAll("button");
var deleteBTN = document.querySelector(".deleteBTN");
var taskList = [];
function addTask() {
    var obj = {
        taskVal: "",
        isDone: ""
    };
    obj["taskVal"] = (task.value).toString();
    obj['isDone'] = "";
    taskList.push(obj);
    displayTasks();
}
function doneTask(taskId) {
    taskList[taskId]["isDone"] = "disabled";
    document.getElementById("" + taskId).style.opacity = '0.5';
    document.getElementById("" + taskId).style.pointerEvents = 'none';
    console.log(taskId);
    console.log(taskList[taskId]["isDone"]);
}
function deleteTask(Id) {
    if (taskList[Id]['isDone'] === "disabled") {
        taskList.splice(Id, 1);
        displayTasks();
    }
    else {
        var confirmation = prompt("Do you really wanna delete? y/n ");
        if (confirmation.toLowerCase() === "y") {
            taskList.splice(Id, 1);
            displayTasks();
        }
    }
    console.log(Id);
    console.log(taskList);
}
function displayTasks() {
    var output = "";
    taskList.forEach(function (el) {
        output += "\n        <div class=\"col-md-12 col-lg-12 border border-success mt-2 p-2 rounded infos\">\n            <div class=\"h4 text-warning\">Task " + (taskList.indexOf(el) + 1) + "</div>\n            <div class=\"descAndButt\">\n                <div class=\"d-flex flex-row\">\n                    <div class=\"h5 text-secondary\">Task Description :</div>\n                    <div class=\"h5 text-success ml-2\">" + el.taskVal + "</div>\n                </div>\n                <div class=\"d-flex flex-row mb-3\">\n                    <button class=\"btn btn-info mr-2 " + el['isDone'] + " \" id=\"" + taskList.indexOf(el) + "\" onClick=\"doneTask(this.id)\">Done</button>\n                    <button class=\"btn btn-danger deleteBTN\" id=\"" + taskList.indexOf(el) + "\" onClick=\"deleteTask(this.id)\">Delete</button>\n                </div>\n                \n            </div>\n        </div>\n        ";
    });
    task.value = "";
    showTask.innerHTML = output;
}
document.addEventListener("DOMContentLoaded", function () {
    console.log("Connected perfectly....");
    addBtn.addEventListener("click", function () {
        if (task.value !== "") {
            addTask();
        }
        else {
            alert("Please add some text!");
        }
    });
});
