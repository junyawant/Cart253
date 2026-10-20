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
    'assets/images/luxray.png',
    'assets/images/luxio.png',
    'assets/images/shinx.png',
    'assets/images/morpeko.png',
    'assets/images/pikachu.png',
    'assets/images/dedenne.png',
    'assets/images/emolga.png',
    'assets/images/yamper.png',
    'assets/images/plusle.png',
    'assets/images/minun.png',
    'assets/images/jolteon.png',
    'assets/images/pawmot.png',
    'assets/images/mareep.png'
]

//An array of the cards that have been placed already by clicking
let placeCards = [];

//Decides which pokemon loads in next (going through the array (hopefully in order?)
let nextIndex = 0;

//pokemon sizes
const POKEMON_H = 300;

//Loads my ladnscape image
//Moved to the beginning so that the background amd every pokemon image loads before the sketch starts
function preload() {

    landscape = loadImage('assets/images/route2background.jpg');

    for (let file of pokemonFiles) {
        pokemonImages.push(loadImage(file));
    }
}

//Creates the canvas to be relative to the (browser) windows properties (height and width)
function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CORNER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(220);
    image (landscape, 0, 0, width, height);

    for (let card of placeCards) {
        drawPokemon (card);
    }
}

function drawPokemon(card) {
    //This keeps the original proportions of the image so that it doesnt stretch
    let h = POKEMON_H
    let w = card.img.width * (h / card.img.height);

    push();
    imageMode(CENTER);
    image(card.img, card.x, card.y, w, h);
    pop();
}

function mousePressed() {
    let newCard = {
        img: pokemonImages[nextIndex],
        x: mouseX,
        y: mouseY
    };
    placeCards.push(newCard);

    nextIndex = (nextIndex + 1) % pokemonImages.length;
}


//Function that resizes my image no matter the size of the window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}