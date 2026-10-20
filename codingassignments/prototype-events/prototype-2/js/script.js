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
let ash;

//Ash's position + Speed
let ashX = 400;
let ashY = 400;
let ashSpeed = 5;

//Variables for pokemon(s)
let bulbasaur;
let charmander;
let squirtly;

function preload() {
    landscape = loadImage('assets/images/pallettown.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CORNER);

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