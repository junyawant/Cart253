/**
 * Hotel California
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
    createCanvas(600, 700);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    fill("#000000");
    noStroke();
    rect(0, 0, 600, 700);

    //Drawing the lines that the tab will rest on
    push()
    strokeWeight(2);
    stroke("#ececec");
    //Upper Group of Lines
    line (0, 100, 680, 100);
    line(0, 130, 600, 130);
    line(0, 160, 600, 160);
    line (0, 190, 600, 190);
    line(0, 220, 600, 220);
    line (0, 250, 600, 250);
    //Lower Group of Lines
    line(0, 430, 600, 430);
    line(0, 460, 600, 460);
    line(0, 490, 600, 490);
    line(0, 520, 600, 520);
    line(0, 550, 600, 550);
    line(0, 580, 600, 580);
    pop();

    //Adding Text (Decoration)
    

    //Testing
    //fill("#000000");
    //rect(100, 100, 100, 100);


}