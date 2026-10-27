/**
 * Math O' Clock
 * Erica Galvez
 * 
 * My idea for this prototype is to create a countdown timer that could be helpful for me at work. On thursday afternoons, I tutor a 5-6th grade math class and frequently use timers with my students (For example: completing 50 multiplications in 2-3 minutes)
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

//Variables
const FONT_PATH = "assets/Press_Start_2P/PressStart2P-Regular.ttf";
const BG_COLOR = ("#254E70");

//For Fonts
let myFont;

//3 input boxes (in an array so its either to hide or show them)
let taskInput;
let minutesInput;
let secondsInput;
let inputs = [];

//For the 4 math symboles in the title screen
//Either all symbols or just one? (TBD)
let symbols = ["+", "-", "x", "/"];

let taskText = "";
let mode = "title";
let startTime = 0;
let duration = 0;

//DESIGNING THE AESTHETIC APPEARANCE
//Variables for screen (Visuals)
let pageW = 480;
let pageH = 720;
let zoom = 1; //scales screen
let offsetX = 0; //creates gap on left (so the page is centered)
let offsetY = 0; //creates gap on top

//Variables for buttons (Position + Size)
let btnX = 125;
let btnY = 570;
let btnW = 230;
let btnH = 56;

//Adding it before setup to load the font before the sketch even starts
function preload() {
    myFont = loadFont(FONT_PATH);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);

    taskInput = createInput("");
    taskInput.attribute("placeholder", "What are you working on?");

    minutesInput = createInput("25", "number");

    secondsInput = createInput("0", "number");
    
    //puting the boxes in an array
    inputs = [taskInput, minutesInput, secondsInput];
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style("text-align", "center");
    }

    updateLayout();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(BG_COLOR);

    push();
    translate(offsetX, offsetY);
    scale(zoom);
    
    if (mode === "title") {
        drawTitleScreen();
    } else {
        drawTimerScreen();
    }

    pop();
}

//This function follows the size of the window (whether it changes sizes)
function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
    updateLayout();
}

//This function works out the zoom + gaps + input boxes
function updateLayout() {
    zoom = min(width/pageW, height/pageH);
    offsetX = (width - pageW * zoom) /2;
    offsetY = (height - pageH * zoom) /2;

    placeInput(taskInput, 90, 420, 300);
    placeInput(minutesInput, 140, 515, 100);
    placeInput(secondsInput, 260, 515, 100);
}

//Puts an input box at X AND Y (minutes + seconds)
function placeInput(box, x, y, w) {
    box.position(offsetX + x * zoom, offsetY + y * zoom);
    box.size(w * zoom, 24 * zoom);
    box.style("font-size", 16 * zoom + "px");
}

//This functions returns (true) if the mouse is on the button
function mouseOnButton() {
    let pageMouseX = (mouseX - offsetX) / zoom;
    let pageMouseY = (mouseY -  offsetY) / zoom;

    return pageMouseX < btnX && pageMouseX < btnX + btnW && pageMouseY > btnY && pageMouseY < btnY + btnH;
}

function drawTitleScreen() {
    //drawing the 4 symbols in a grid (2x2)
    for (let i = 0; i < symbols.length; i++) {
        let x = 165 + (i % 2) * 150;
        let y = 230 + floor(i/2) * 115;
        drawSymbol (symbols[i], x, y);
    }

    fill("#FFFFFF");
    textFont(myFont);
    textSize(32);
    text("MATH O' CLOCK", 240, 90);

    textFont("sans-serif");
    textSize(15);
    text("Study smart with this math timer!", 240, 140);

}

function drawTimerScreen() {
    let timeLeft = getTimeLeft();

    //Text displays near the top
    fill("#FFFFFF");
    textFont(myFont);
    textSize(28);
    if (timeLeft === 0) {
        text("TIME'S UP!", 240, 100);
    } else {
        text("YOU GOT THIS!", 240, 100);
    }

    //Text for the task inserted (Input + Buttons)
    textFont("sans-serif");
    textSize(17);
    text(taskText, 40, 150, 400, 90);

    //Text for the time displayed
    textFont(myFont);
    textSize(78);
    text(formatTime(timeLeft), 240, 340);

    //Progression bar at the bottom as the time passes
    let progress = 1 - timeLeft/duration; //(0 -> 1)
    strokeWeight(14);
    stroke(255,90);
    line(60, 470, 420, 470); //empty bar
    stroke(255);
    line(60, 470, 60 + 360 * progress, 470); //filled part of the bar
    noStroke(); 

    //Resets/Creates new timer
    if (timeLeft === 0) {
        drawButton("NEW TIMER");
    }
}

//This function returns the milliseconds that may be left (BUT IS NEVER LESS THAN 0) --> so that we dont hit any negative numbers
function getTimeLeft() {
    let timeLeft = duration - (millis() - startTime);
    return max(timeLeft, 0);
}

//This function turns milliseconds into text
function formatTime(ms) {
    let totalSeconds = ceil(ms/1000);
    let mins = floor (totalSeconds/60);
    let secs = totalSeconds % 60;
    return nf(mins, 2) + ":" + nf(secs, 2);
}

//This function draws the math symbols (decided on ALL 4 for visual balance + variety (in the case where i would be using a timer while tutoring different subjects))
function drawSymbol (symbol, x, y) {
    stroke("#FFFFFF");
    strokeWeight(14);

    if(symbol === "+") {
        line(x - 40, y, x + 40, y);
        line(x, y - 40, x, y + 40);
    } else if (symbol === "-") {
        line (x - 40, y, x + 40, y);
    } else if (symbol === "x") {
        line (x - 40, y - 40, x + 40, y + 40);
        line (x - 40, y + 40, x + 40, y - 40);
    } else if (symbol === "/") {
        line(x - 40, y, x + 40, y);
        noStroke();
        fill("#FFFFFF");
        ellipse(x, y - 32, 20);
        ellipse(x, y + 32, 20);
    }

    noStroke();
}

function drawButton(label) {
    stroke("#FFFFFF");
    strokeWeight(4);
    if (mouseOnButton()) {
        fill("#FFFFFF");
    } else {
        noFill();
    }

    rect (btnX, btnY, btnW, btnH, 6);

    noStroke();

    if(mouseOnButton()) {
        fill (BG_COLOR);
    } else {
        fill("#FFFFFF");
    }

    textFont("sans-serif");
    textSize(22);
    text(label, btnX + btnW/2, btnY + btnH/2);
}

function mousePressed() {
    if (mouseOnButton() && mode === "title") {
        taskText = taskInput.value();
        let mins = int (minutesInput.value());
        let secs = int (secondsInput.value());
    }

   if(isNaN(mins)) {
    mins = 0;
   }
   if (isNaN(secs)) {
    secs = 0;
   }

   duration = (mins * 60 + secs) * 1000;
   startTime = millis();
   mode = "work";
}
