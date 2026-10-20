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
    //Sets up first round when sketch loads
    newGame();

}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    imageMode(CORNER);
    image (landscape, 0, 0, width, height);

    //Feedback text
    fill("#FFFFFF");
    stroke(0);
    strokeWeight(6);
    textAlign(CENTER, CENTER);
    textSize(36);
    text(message, width / 2, height * 0.08);

    //Guess Counter
    textSize(22);
    strokeWeight(4);
    text("Guesses: " * attempts, width * 0.9, height * 0.05);

    //Text After solving
    if (solved) {
        textSize(10);
        text("Press R or click anywhere to play again", width / 2, height * 0.97);
    }

}

function newGame() {
    //The choices start with the right answer
    choices = [answer];

    //THEN adds 3 random wrong ones
    let shuffleDecoys = shuffle(decoys);
    for (let i = 0; i < 3; i ++) {
        choices.push(shuffledDecoys[i]);
    }

    //Shuffle so the right answer isnt always in the same spot
    choices = shuffle(choices);

    wrong = [false, false, false, false];
    solved = false;
    attempts = 0;
    message = "";
}

function mousePressed() {
    if (solved) {
        newGame();
        return;
    }
}

function keyPressed() {

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}