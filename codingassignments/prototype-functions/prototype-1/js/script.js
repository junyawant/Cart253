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