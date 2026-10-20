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
let squirtly;

let charmanderX = 200;
let charmanderY = 200;
let charmanderCaught = false;

let squirtleX = 200;
let squirtleY = 200;
let squirtleCaught = false;

//This is how close Ash has to be in order to catch one of the pokemons
let catchDistance = 100;

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
}

function moveAsh() {
    if (keyIsDown(LEFT_ARROW)) {
        ashX = ashY - ashSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        ashX = ashY + ashSpeed;
    }
    if (keyIsDown(UP_ARROW)) {
        ashX = ashY - ashSpeed;
    }
    if (keyIsDown(DOWN_ARROW)) {
        ashX = ashY + ashSpeed;
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}