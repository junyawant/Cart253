/**
 * Clockwise
 * Erica Galvez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#000000");
    noFill();
    stroke(255);
    //Drawing the main clock 
    ellipse(200, 200, 320, 320);
    ellipse(200, 200, 350, 350);
    ellipse(200, 200, 210, 210);
    ellipse(200, 200, 180, 180);

    push();
    fill("#FFFFFF");
    strokeWeight(2);
    //Lines that are straight (No rotation needed)
    rect(200, 25, 5, 15); //top line
    rect(200, 360, 5, 15); //bottom line

    //Rotated Lines



    pop();


    //Drawing the time
    push();
    fill("#FFFFFF");
    noStroke();
    textStyle(NORMAL);
    textSize(45);
    textAlign(CENTER, CENTER);
    //Adding Roman Numerals as time displays
    //text("I", 260, 86);
    //text("II", 300, 100);
    //text("III", 200, 320);
    //text("IV", 80, 200);
    //text("V", 140, 140);
    //text("VI", 260, 140);
   // text("VII", 140, 260);
   // text("VIII", 260, 260);
    //text("IX", 200, 200);
   // text("X", 200, 140);
   // text("XI", 140, 200);
    //text("XII", 200, 70);

    pop();

}