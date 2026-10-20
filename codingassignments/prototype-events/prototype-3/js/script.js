/**
 * Who's That Pokemon?
 * Erica
 * 
 * This prototype is inspired by the famous pokemon scenes (mostly made into memes these days) of a blacked out pokemon waiting to be revealed. In this case, you are given many different options to choose from before getting the right answer! How it works: Using your LMB, hover over the button in order to guess the right name of the Pokemon!
 */

"use strict";

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

//Loads in my images
function preload() {
    backgroundImg = loadImage('assets/images/whosthatpokemonbackground.jpg');
    snorlax = loadImage('assets/images/snorlax.png')
    blackedoutsnorlax = loadImage('assets/images/blackedoutsnorlax.png')
}

/**
 * Setup creates the canvas and reloads a new game everytime the browser is refreshed or the game is replayed!
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    //Sets up first round when sketch loads
    newGame();

}

/**
 * My draw illustrates most of the text seen in the project! As well as calling on functions I have made outside of DRAW
*/
function draw() {
    imageMode(CORNER);
    image (backgroundImg, 0, 0, width, height);

    //Calling on my other functions
    drawPokemon();
    drawButtons();

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
    text("Guesses: " + attempts, width * 0.9, height * 0.05);

    //Text After solving
    if (solved) {
        textSize(18);
        text("Click anywhere to play again", width / 2, height * 0.97);
    }

}

function drawPokemon() {
    //This picks which image to show
    //Normal one --> if solved
    //Hidden one --> shown otherwise if NOT solved

    let img = blackedoutsnorlax;
    if (solved) {
        img = snorlax;
    }

    //Size is based on the window height
    let h = height * 0.5;
    let w = img.width * (h / img.height);

    imageMode(CENTER);
    image(img, width * 0.27, height * 0.4, w, h);

}

//Draws four options buttons
function drawButtons() {
    for (let i = 0; i < 4; i++) {
        let b = getButton(i);

        //Decides button color
        if (solved && choices[i] === answer) {
            fill("#48a36e");
        }
        else if (wrong[i]) {
            fill("#a12d2d");
        }
        else if (solved === false && hoveredSlot === i) {
            fill("#cac8c8");
        }
        else {
            fill("#FFFFFF");
        }

        stroke(0);
        strokeWeight(3);
        rect(b.x, b.y, b.w, b.h, 12);

        //Button text
        noStroke();
        fill("#000000");
        textSize(24);
        textAlign(CENTER, CENTER);
        text(choices[i], b.x + b.w / 2, b.y + b.h / 2);
    }
}

//Gives position + size of button 
function getButton(i) {
    let column = i % 2; 
    let row = floor(i /2);
    let gridWidth = 2 * buttonW + buttonGap;
    let startX = width * 0.27 - gridWidth / 2;
    let startY = height * 0.70;

    return {
        x: startX + column * (buttonW + buttonGap),
        y: startY + row * (buttonH + buttonGap),
        w: buttonW,
        h: buttonH
    };
}

//This check whether the mosue is over the button 
function isOverButton(i) {
    let b = getButton(i);
    return mouseX > b.x && mouseX < b.x + b.w && mouseY > b.y && mouseY < b.y + b.h;
}

//Start (or restarts) the game with a different set of choices
function newGame() {
    //The choices start with the right answer
    choices = [answer];

    //THEN adds 3 random wrong ones
    let shuffledDecoys = shuffle(decoys);
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

//This checks the guess for button number slot
function makeGuess(slot) {
    if (solved || wrong[slot]) {
        return;
    }

    attempts = attempts + 1;
    if (choices[slot] === answer) {
        solved = true;
        message = "Correct! It's " + answer + "!";
    }
    else {
        wrong[slot] = true;
        message= "Nope, try again!";
    }
}

//This figures out which (if there are any) the mouse is hovered over
function mouseMoved() {
    hoveredSlot = -1;

    for (let i = 0; i < 4; i++) {
        if (isOverButton(i)) {
            hoveredSlot = i;
        }
    }
}

//This function checks if the mouse is clicked
//If the right name is solved --> Star over
//If not --> checks buttons
function mousePressed() {
    if (solved) {
        newGame();
        return;
    }

    for (let i = 0; i < 4; i++) {
        if (isOverButton(i)) {
            makeGuess(i);
        }
    }
}

//Resizes elements of my project based off window width and height
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}