/**
 * Locked Target
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let targetX = 200; //CURRENT position of the target
let targetY = 200;

function setup() {
    createCanvas(400, 400);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/

function mousePressed() {
    targetX = mouseX;
    targetY = mouseY;
}

function draw() {
    background("#000000");

    push();
    translate(200, 200);
    noFill();
    stroke("#951313");

    //Drawing the target symbol

    //Big Outer Ring
    strokeWeight(4);
    ellipse(0, 0, 80, 80);
    
    //Smaller Inner Ring
    strokeWeight(1);
    ellipse (0, 0, 50, 50);

    //Crosshair (lines throughout whole target)
    strokeWeight(1);
    line(0, -55, 0, 55);
    line(-55, 0, 55, 0);

    //Thicker crosshair (ends of crosshair outside of the rings)
    strokeWeight(4);
    line(0, -55, 0, -38);
    line(0, 55, 0, 38);
    line(-55, 0, -38, 0);
    line(55, 0, 38, 0);
    
    //Inner + Sign
    strokeWeight(3);
    line(-12, 0, -6, 0);
    line(6, 0, 12, 0);
    line(0, -12, 0, -6);
    line(0, 6, 0, 12);

    pop();



}