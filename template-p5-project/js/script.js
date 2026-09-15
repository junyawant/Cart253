/**
 * Doomsday
 * Erica Galvez & Sabrina Rath
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
function draw() {
    background('#397367');

    //Drawing the moon 
    push();
    fill('#FFF3D1');
    ellipse(320,280,150);
    pop();

    //Drawing the mountains
    //Reminders that will be useful:
    //X-axis: 
            // 1.Increasing x moves the point to the right.
            //2.Decreasing x moves it to the left.
    //Y-axis:
        //1. Increasing y moves the point down.
        //2. Decreasing y moves it up.

    fill('#000000');
    triangle(80, 400, 400, 400, 250, 300);
    triangle(200, 400, 600, 400, 400, 270);
    triangle(50, 400, 300, 400, 200, 290);
    triangle(-50, 400, 150, 400, 100, 240);
    triangle(400, 400, 640, 400, 640, 240);

    fill('#DB162F');
    rect (100, 420, 100, 50);
    rect (300, 420, 100, 50);
    rect (500, 420, 100, 50);


    //Draw land
    fill('#020122');
    rect(0,500,800,200)
}


