/**
 * Catch All the Starters!
 * Erica Galvez
 * 
 * This project is meant to imitate those old pokemon games that first released in pixelated versions, on early DS handheld consoles. You walk around the map finding the 3 most popular starter pokemons and catch them all!
 */

"use strict";

//Variables

//Variable for background 
let landscape;

//Variable for pokemon trainer
let ashImg;

//Variables for Ash's position + speed
let ashX = 300;
let ashY = 300;
let ashSpeed = 5;

//Variables for pokemon(s)
let bulbasaur;
let charmander;
let squirtle;

let bulbasaurX = 1250;
let bulbasaurY = 400;
let bulbasaurCaught = false;

let charmanderX = 450;
let charmanderY = 100;
let charmanderCaught = false;

let squirtleX = 170;
let squirtleY = 600;
let squirtleCaught = false;

//Variable for image sizes
let pokemonSize = 70;
let ashScale = 0.25;

//This is how close Ash has to be in order to catch one of the pokemons
let catchDistance = 100;

//Text at top of screen
let message = "Use the arrow keys to walk. Press SPACE near a Pokemon!";

function preload() {
    landscape = loadImage('assets/images/pallettown.png');
    ashImg = loadImage('assets/images/ash.png');
    bulbasaur = loadImage('assets/images/bulbasaur.png');
    charmander = loadImage('assets/images/charmander.png');
    squirtle = loadImage('assets/images/squirtle.png');
}

/**
 * Setup draws the canvas of the project, using its window width and height
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CORNER);

}


/**
 * My draw function holds the images for my pokemons and my pokemon trainer, as well as the text at the top of the screen
*/
function draw() {
    imageMode(CORNER);
    image (landscape, 0, 0, width, height);
    imageMode(CENTER);

    moveAsh();

    //Only draw the pokemon that HAVE NOT gotten caught yet
    if (bulbasaurCaught === false) {
        image(bulbasaur, bulbasaurX, bulbasaurY, pokemonSize, pokemonSize);
    }

    if (charmanderCaught === false) {
        image(charmander, charmanderX, charmanderY, pokemonSize, pokemonSize);
    }

    if (squirtleCaught === false) {
        image(squirtle, squirtleX, squirtleY, pokemonSize, pokemonSize);
    }

    image(ashImg, ashX, ashY, ashImg.width * ashScale, ashImg.height * ashScale);

    //Message at top (instructions)
    fill("#ffffff");
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textAlign(CENTER);
    textStyle(BOLD);  
    text(message, width / 2, 40);
}

function moveAsh() {
    if (keyIsDown(LEFT_ARROW)) {
        ashX = ashX - ashSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        ashX = ashX + ashSpeed;
    }
    if (keyIsDown(UP_ARROW)) {
        ashY = ashY - ashSpeed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        ashY = ashY + ashSpeed;
    }

}

function keyPressed() {
    if (key === ' ') {
        if (bulbasaurCaught === false && dist (ashX, ashY, bulbasaurX, bulbasaurY) < catchDistance) {
            bulbasaurCaught = true;
            message = "You caught Bulbasaur!";
        }
        else if (charmanderCaught === false && dist (ashX, ashY, charmanderX, charmanderY) < catchDistance) {
            charmanderCaught = true;
            message = "You caught Charmander!";
        }

         else if (squirtleCaught === false && dist (ashX, ashY, squirtleX, squirtleY) < catchDistance) {
            squirtleCaught = true;
            message = "You caught Squirtle!";
         }
         else {
            message = "Nothing close by, explore more!";
         }
    }

    //This stops the arrow keys and space from scrolling the page
    return false;
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}