/**
 * Todo list!
 * Erica Galvez
 * 
 * My vision for this prototype is to create a to do list! A simple and easier, more straight forward project after the more complex one in prototype 1.
 */

"use strict";

//Variables
let task = [];
let typedText = '';

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 500);
    textSize(16);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#FFFFFF");

    drawTitle();
    drawInputBox();
    drawAddButton();

}

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
    rect(150, 60, 70, 32);

    noStroke();
    fill(0);
    text("Add", 222, 82);

}