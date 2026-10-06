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
function setup() {
    createCanvas(400, 400);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#000000");

    push();
    translate(200, 200);
    noFill();
    stroke("#951313");

    //Drawing the target symbol

    //Big Outer Ring
    strokeWeight(4);
    ellipse(0, 0, 50, 50);
    
    //Smaller Inner Ring
    strokeWeight(1);
    ellipse (0, 0, 50, 50);

    //Crosshair (lines throughout whole target)
    strokeWeight(1);
    line(0, -25, 0, 25);
    line(-25, 0, 25, 0);



}