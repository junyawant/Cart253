/**
 * To Do List!
 * Erica Galvez
 * 
 * My vision for this prototype is to create a to do list! A simple and easier, 
 * more straight forward project after the more complex one in prototype 1. (atleast to me)
 * I was inspired to do this project due to a topic brought up at work where someone asked 
 * how others kept track of the things they need to get done in a week.
 */

"use strict";

//Variables
let tasks = [];
let typedText = '';

let rowHeight = 30;
let listTop = 150;

/**
 * Creates the canvas and sets the default text size 
*/
function setup() {
    createCanvas(400, 500);
    textSize(16);
}

/**
 * Redraws the whole to do list every frame
*/

function draw() {

    background("#FFFFFF");
    drawTitle();
    drawInputBox();
    drawAddButton();
    drawTasks();
}

//FUNCTIONS THAT DRAW CERTAIN ELEMENTS OF THE CODE (title, inputbox, button, tasks)
//This function draws the main text on the screen (title and subtitle)
function drawTitle() {
    //Might change the font to PressStart2P
    fill("#000000");
    noStroke();
    textSize(32);
    textStyle(BOLD);
    text ("To Do List", 10, 40);

    textSize(22);
    text ("Task List", 10, 125);
    textStyle(NORMAL);
    textSize(16);
}

//This functions draws the box where the input of what task needs to be done
function drawInputBox() {
    stroke(0);
    fill("#FFFFFF");
    rect(10, 60, 200, 32);

    noStroke();
    if(typedText === '') {
        fill(150);
        text("Add task", 18, 82);
    } else {
        fill("#000000");
        text(typedText, 18, 82);
    }
}

function drawAddButton() {
    stroke(0);
    fill(230);
    rect(250, 60, 70, 32);

    noStroke();
    fill(0);
    text("Add", 270, 82);
}

function drawTasks() {
    for(let i = 0; i < tasks.length; i++) {
        let y = listTop + i * rowHeight;
    

    //This draws the checkbox
    stroke(0);
    fill("#FFFFFF");
    rect(15, y, 18, 18);

    if(tasks[i].done) {
        line(18, y + 9, 24, y + 15);
        line(24, y + 15, 31, y + 3);
    }

    //This draws the task text AND crosses it out when/if said task is done
    noStroke();
    fill(tasks[i].done ? 150: 0);
    text(tasks[i].text, 45, y + 15);
    
    if(tasks[i].done) {
        stroke(150);
        line(45, y + 10, 45 + textWidth(tasks[i].text), y + 10);
    }

    noStroke();
    fill(200, 0, 0);
    text("X", 365, y + 15);
}
}

function addTask() {
    let text = typedText.trim();
    if (text === '') return; //ignore empty tasks
    if (tasks.length >= 10) return; //this keeps list on the canvas

    //this essentially adds a new task object at the end of the tasks array (and it starts as not done)
    tasks.push({text: text, done: false});
    typedText = '';
}

//FUNCTIONS FOR KEYBOARD/MOUSE INTERACTIONS
//FOR MOUSE
function mousePressed() {
    if (mouseX > 250 && mouseX < 320 && mouseY > 60 && mouseY < 92) {
        addTask();
        return;
    }

    //clicks on a task row
    for(let i=0; i < tasks.length; i ++) {
        let y=listTop + i * rowHeight;
        if(mouseY > y && mouseY < y + rowHeight - 5) {
            if (mouseX > 355 && mouseX < 390) {
                deleteTask(i); //when the x is clicked on
            } else if (mouseX > 10 && mouseX < 350) {
                toggleTask(i);
            }
            return;
        }
    }
}

function keyPressed() {
    if(keyCode === ENTER) {
        addTask();
    } else if (keyCode === BACKSPACE) {
        typedText = typedText.slice(0, -1);
        return false;
    }
}

//FOR KEYBOARD/TASKS
function keyTyped() {
    console.log("key typed:", key);
    if (key.length === 1 && typedText.length < 25) {
        typedText += key;
    }
    return false;
}

//This function flips a task between being done and not done
function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
}

//This function REMOVES the task at said position from the tasks array
function deleteTask(index) {
    tasks.splice(index, 1);
}