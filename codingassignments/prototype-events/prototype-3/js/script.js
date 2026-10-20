/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
//Variable for background image
let backgroundImg;

//Vairable for mystery pokemon
let snorlax;
let blackedoutsnorlax;
let answer = "Snorlax";

//Adding wrong names to mix in
let decoys = [
    'Slowbro',
    'Munchlax',
    'Jigglypuff',
    'Gengar',
    'Dragonite',
    'Lapras',
    'Pikachu'
];
// 4 names shown on the buttons
let choices = [];

//Variables for true or false (solved or not)
let wrong= [];
let solved = false;

//How many tries did it take?
let attempts = 0;

//Shows which button the mouse is hoevered over
let hoveredSlot= -1;

//Feedback text at top of the screen --> starts empty because the background image already asks "Who's that Pokemon?"
let message = "";

//Button sizes
let buttonW = 170;
let buttonH = 45;
let buttonGap = 12;

function preload() {
    backgroundImg = loadImage('assets/images/whosthatpokemonbackground.jpg');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CORNER);
    //Sets up first round when sketch loads
    newGame();

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    image (landscape, 0, 0, width, height);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}