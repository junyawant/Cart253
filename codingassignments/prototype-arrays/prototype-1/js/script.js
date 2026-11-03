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


}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#000000");



}