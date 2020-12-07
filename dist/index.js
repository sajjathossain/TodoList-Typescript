"use strict";
var addBtn = document.querySelector("#add");
var task = document.querySelector("#task");
var showTask = document.querySelector("#add-task");
var taskList = [];
document.addEventListener("DOMContentLoaded", function () {
    console.log("Connected perfectly....");
    addBtn.addEventListener("click", function () {
        if (task.value !== "") {
            var output_1 = "";
            taskList.push(task.value);
            taskList.forEach(function (el) {
                output_1 += "\n                    <div class=\"col s12\">\n                    <div class=\"card blue-grey darken-1 hoverable\">\n                        <div class=\"card-content white-text\">\n                        <span class=\"text-card-title text-white h3\">Task " + (taskList.indexOf(el) + 1) + "</span>\n                        <h2 class=\"text-blue\">" + el + "</h2>\n                        </div>\n                        <div class=\"card-action\">\n                        <button class=\"btn blue hoverable\">Done</button>\n                        <button class=\"btn red hoverable\">Delete</button>\n                        </div>\n                    </div>\n                    ";
            });
            showTask.innerHTML = output_1;
        }
        else {
            alert("Please add some text!");
        }
    });
});
