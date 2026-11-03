/**
 * Spiderman: Words of Inspiration
 * Erica Galvez
 * 
 * My aim for this prototype is to make an array using texts! The project aims to inspire those who are big fans of the Spiderman series! Speak with spiderman as he swings around the city!
 */

"use strict";

//Variables
let spidermanImg;


function preload() {
    spidermanImg = loadImage("assets/images/spiderman.png");

}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(windowWidth, windowHeight)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#000000");

    image(spidermanImg, 0,0);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}