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

//Variables

//Variable for background 
let landscape;

//Variable for pokemon trainer
let ashImg;

//Ash's position + speed
let ashX = 400;
let ashY = 400;
let ashSpeed = 5;

//Variables for pokemon(s)
let bulbasaur;
let charmander;
let squirtle;

let bulbasaurX = 200;
let bulbasaurY = 200;
let bulbasaurCaught = false;

let charmanderX = 200;
let charmanderY = 200;
let charmanderCaught = false;

let squirtleX = 200;
let squirtleY = 200;
let squirtleCaught = false;

//This is how close Ash has to be in order to catch one of the pokemons
let catchDistance = 100;

//Text at top of screen
let message = "Use the arrow keys to walk. Press SPACE near a Pokemon!";

function preload() {
    landscape = loadImage('assets/images/pallettown.png');
    ashImg = loadImage('assets/images/ash.png');
    bulbasaur = loadImage('assets/images/bulbasaur.png');
    charmander = loadImage('assets/images/charmander.png');
    squirtly = loadImage('assets/images/squirtle.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CORNER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    imageMode(CORNER);
    image (landscape, 0, 0, width, height);
    imageMode(CENTER);

    moveAsh();

    //Only draw the pokemon that HAVE NOT gotten caught yet
    if (bulbasaurCaught === false) {
        image(bulbasaur, bulbasaurX, bulbasaurY, 120, 120);
    }

    if (charmanderCaught === false) {
        image(charmander, charmanderX, charmanderY, 120, 120);
    }

    if (squirtleCaught === false) {
        image(squirtle, squirtleX, squirtleY, 120, 120);
    }

    image(ashImg, ashX, ashY, 80, 110);

    //Message at top (instructions)
    fill("#000000");
    stroke(0);
    strokeWeight(4);
    textSize(24);
    textAlign(CENTER);
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