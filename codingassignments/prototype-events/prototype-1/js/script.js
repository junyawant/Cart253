/**
 * Electricity!
 * Erica Galvez
 * 
 * My vision for this project is to make an array of images using Pokemon characters. My plan is for that on each click, a pokemon appears (different pokemon per click) in order to imitate those pokemon full art cards!
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
//Variables

//Variable for background photo
let landscape;

//Creating an array to hold all my loaded pokemon images in the assets folder
let pokemonImages = [];

//Calling on my images so that they EXIST in my sketch
let pokemonFiles = [
    'assets/images/pikachu.png',
    'assets/images/jolteon.png',
    'assets/images/luxray.png',
    'assets/images/luxio.png',
    'assets/images/shinx.png',
    'assets/images/mareep.png',
    'assets/images/plusle.png',
    'assets/images/minun.png',
    'assets/images/dedenne.png',
    'assets/images/emolga.png',
    'assets/images/morpeko.png',
    'assets/images/pawmot.png',
    'assets/images/yamper.png'
]

//An array of the cards that have been placed already by clicking
let placeCards = [];

//Decides which pokemon loads in next (going through the array (hopefully in order?)
let nextIndex = 0;

//pokemon sizes
const CARD_w = 220;
const CARD_H = 300;

function setup() {
    createCanvas(windowWidth, windowHeight);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(220);

    image (landscape, 0, 0, width, height);
    
}

//Loads my image
function preload() {
    landscape = loadImage('assets/images/route2background.jpg');
}

//Function that resizes my image no matter the size of the window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {

}