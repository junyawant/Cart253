/**
 * Title of Project
 * Erica Galvez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

//Variables

//For Fonts
let myFont;

function preload() {
    myFont = loadFont('assets/Press_Start_2P/PressStart2P-Regular.tff');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#254E70");

    //Writing fonts
    textFont(myFont);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(0);
    text("Hello World!", width/2, height/2);

}