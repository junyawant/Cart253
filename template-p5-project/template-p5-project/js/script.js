/**
 * Domo Monster
 * Erica Galvez
 * 
 * This is my first prototype for my Prototype: Instructions assignment. 
 * I have the character Domo drawn in my p5.js project.
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
//Reminders that will be useful:
    //X-axis: 
    // 1.Increasing x moves the point to the right.
    //2.Decreasing x moves it to the left.
    //Y-axis:
    //1. Increasing y moves the point down.
    //2. Decreasing y moves it up.

function draw() {
    background('#654236');

    fill('#000000'); // Domo's Eyes
    ellipse (150, 200, 90, 90); // Domo's Left Eye
    ellipse (500, 200, 90, 90); // Domo's Right Eye

    fill('#000000'); //Domo's Mouth
    rect(150, 400, 350, 100); // Domo's Mouth

}