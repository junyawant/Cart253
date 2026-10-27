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
let pageW = 400;
let pageH = 600;
let zoom = 1; //scales screen
let offsetX = 0; //creates gap on left (so the page is centered)
let offsetY = 0; //creates gap on top

//Variables for buttons (Position + Size)
let btnX = 125;
let btnY = 500;
let btnW = 230;
let btnH = 60;


function preload() {
    myFont = loadFont(FONT_PATH);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}