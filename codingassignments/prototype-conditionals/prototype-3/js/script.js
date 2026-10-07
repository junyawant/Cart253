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

let minuteAngle = 0; //hand where minute is pointing
let hourAngle = 0; //hand where hour is pointing

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
    rect(26, 200, 13, 5);
    rect(360, 200, 13, 5);

    //Rotated Lines

    pop();


    //Drawing the time
    fill("#FFFFFF");
    noStroke();
    textStyle("Times New Roman");
    textSize(28);
    textAlign(CENTER, CENTER);
    //Adding Roman Numerals as time displays
    text("I", 200, 68);
    text("II", 266, 86);
    text("III", 314, 134);
    text("IV", 332, 200);
    text("V", 314, 266);
    text("VI", 266, 314);
    text("VII", 200, 332);
    text("VIII", 134, 314);
    text("IX", 86, 266);
    text("X", 68, 200);
    text("XI", 86, 134);
    text("XII", 134, 86);

    //Clock Hand (Hour)
    push();
    translate(200, 200);
    rotate(hourAngle);
    stroke(255);
    strokeWeight(5);
    line(0, 0, 0, -55);
    noStroke();
    ellipse(0, -45, 12, 12);
    pop();

    //Clock Hand (Minute)

}