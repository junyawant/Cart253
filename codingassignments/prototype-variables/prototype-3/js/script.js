/**
 * Circled Sun
 * Erica Galvez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let rotationAmount = 0;
function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#000000");
    rotationAmount += 1;

    push();
    rectMode(CENTER);
    noStroke();
    fill("#C33C54");
    translate(width / 2, height / 2);
    rotate (rotationAmount);
    rect (0, 0, 100, 75);
    //same as writing
    //rotationAmount = rotationAmount + 1
    pop ();

    push();
    translate(width/2, height/2);
    rotate (-rotationAmount);
    fill("#254E70");
    ellipse (100, 100, 70);
    pop ();
}