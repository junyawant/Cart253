/**
 * Title of Project
 * Author Name
 * 
 * My vision for this project is to make an array of images using Pokemon characters
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

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

function preload() {
    landscape = loadImage('assets/images/route2background.jpg');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}