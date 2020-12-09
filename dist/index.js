"use strict";
var addBtn = document.querySelector("#add");
var task = document.querySelector("#task");
var showTask = document.querySelector("#add-task");
var doneBTN = document.querySelectorAll("button");
var deleteBTN = document.querySelector(".deleteBTN");
// function to add new task
function addTask() {
    var obj = {
        taskVal: "",
        isDone: ""
    };
    obj["taskVal"] = (task.value).toString();
    obj['isDone'] = "";
    var localStorageLength = window.localStorage.length;
    localStorage.setItem("" + localStorageLength, JSON.stringify(obj));
    console.log(localStorage);
    displayTasks();
}
// function to define a task as finished
function doneTask(taskId) {
    var key = localStorage.key(taskId);
    var localStorageToObject = JSON.parse(localStorage.getItem(key));
    localStorageToObject["isDone"] = "disabled";
    localStorage.setItem("" + taskId, "" + JSON.stringify(localStorageToObject));
    document.getElementById("" + taskId).style.opacity = '0.5';
    document.getElementById("" + taskId).style.pointerEvents = 'none';
    console.log(taskId);
    console.log(localStorageToObject["isDone"]);
}
// Function to delete a task
function deleteTask(Id) {
    var key = localStorage.key(Id);
    var localStorageToObject = JSON.parse(localStorage.getItem(key));
    if (localStorageToObject['isDone'] === "disabled") {
        localStorage.removeItem("" + Id);
        displayTasks();
    }
    else {
        var confirmation = prompt("Do you really wanna delete? y/n ");
        if (confirmation.toLowerCase() === "y") {
            localStorage.removeItem("" + Id);
            displayTasks();
        }
    }
    if (localStorage.length === 0) {
        localStorage.clear();
        location.reload();
    }
    console.log(Id);
}
// Function to display all available tasks
function displayTasks() {
    var output = "";
    if (localStorage.length === 0) {
        document.getElementById("error").innerHTML = '<h4 class="mt-5 text-center text-danger h4">Task List Is Empty! 😁</h4>';
    }
    else {
        document.getElementById("error").style.display = "none";
        output = "";
        for (var el = 0; el < localStorage.length; el++) {
            var key = localStorage.key(el);
            var localStorageToObject = JSON.parse(localStorage.getItem(key));
            output += "\n        <div class=\"col-md-12 col-lg-12 col-md-12 col-sm-12 border border-success mt-2 p-2 rounded infos\">\n            <div class=\"h5 text-warning\">Task " + (el + 1) + "</div>\n            <div class=\"descAndButt\">\n                <div class=\"d-flex flex-row\">\n                    <div class=\"p text-secondary\">Task Description :</div>\n                    <div class=\"p text-success ml-2\">" + localStorageToObject["taskVal"] + "</div>\n                </div>\n                <div class=\"d-flex flex-row mb-3\">\n                    <button class=\"btn btn-info mr-2 " + localStorageToObject['isDone'] + " \" id=\"" + ("" + el) + "\" onClick=\"doneTask(this.id)\">Done</button>\n                    <button class=\"btn btn-danger deleteBTN\" id=\"" + ("" + el) + "\" onClick=\"deleteTask(this.id)\">Delete</button>\n                </div>\n                \n            </div>\n        </div>\n        ";
        }
        ;
    }
    task.value = "";
    showTask.innerHTML = output;
}
// start position
document.addEventListener("DOMContentLoaded", function () {
    console.log("Connected perfectly....");
    displayTasks();
    addBtn.addEventListener("click", function () {
        if (task.value !== "") {
            addTask();
        }
        else {
            alert("Please add some text!");
        }
    });
});
