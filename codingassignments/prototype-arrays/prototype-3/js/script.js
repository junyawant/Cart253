/**
 * Spiderman: Words of Inspiration
 * Erica Galvez
 * 
 * My aim for this prototype is to make an array using texts! The project aims to inspire those who are big fans of the Spiderman series! Speak with spiderman as he swings around the city!
 */

"use strict";

//Variables
let spidermanImg;
let box;
let quotes = [
    "That's all it is, Miles. A leap of faith.",
    "Sometimes to do what's right, we have to be steady and give up the thing we want most. Even our dreams.",
    "You're not a nobody, you're somebody!",
    "We always have a choice, and we can always choose to do what's right.",
    "You can't be a friendly neighborhood Spider-Man if there's no neighborhood.",
    "Everyone keeps telling me how my story is supposed to go! Nah, ima do my own thing",
    "What's important is not standing by and allowing someone to suffer or die because you do nothing",
    "I will never forget these words: with great power, comes great responsibility."
];

let index= 0;

//Variables for textbox

const BOX_X= 40;
const BOX_Y= 40;
const BOX_W= 480;
const BOX_H= 190;


function preload() {
    spidermanImg = loadImage("assets/images/spiderman.png");
    box = loadImage("assets/images/textbox.png");

}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    // createCanvas(windowWidth, windowHeight)
    createCanvas(1080, 720);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#000000");

    image(spidermanImg, 0,0, width, height);

}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight)
// }