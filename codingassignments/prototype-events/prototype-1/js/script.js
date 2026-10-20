/**
 * Title of Project
 * Author Name
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