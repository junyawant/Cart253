/**
 * Hat of the Day
 * Erica Galvez
 * 
 * Cycling through a set of hats to decide which one to wear for the day!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let hats = []; //array that will hold all my hat images
let currentHat = 0; //index of the hat being displayed 

function preload() {
    for (let i = 1; i <= 10; i++) {
        hats.push(loadImage("assets/images/hat" + i + ".png"));
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#000000");

    let hatSize = min(width, height) * 0.5;
    image(hats[currentHat], width / 2, height / 2, hatSize, hatSize)
}

function keyPressed() {
    if(keyCode === RIGHT_ARROW) {
        currentHat++;
        if(currentHat >= hats.length) {
            currentHat = 0;
        }
    } else if (keyCode === LEFT_ARROW) {
        currentHat--;
        if(currentHat < 0) {
            currentHat = hats.length - 1;
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}