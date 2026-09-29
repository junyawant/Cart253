/**
 * Crimson Sunset
 * Erica Galvez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//Assigning variables
let backgroundVal = 0;
let color1, color2; //Black + Red

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 400,);
    //Assigning colors to each variables!
    color1 = color("#000000") //Black 
    color2 = color("#3D0C11") //Red

}

function draw() {
    //This allows for my background to appear as a fade/gradient using mouse pressed!
    if (mouseIsPressed){
        backgroundVal += 5; 
    } else {
        backgroundVal -= 5; 
    }

    backgroundVal = constrain(backgroundVal, 0, 255);
    
    
    let currentbackground = lerpColor(color1, color2, backgroundVal / 255);
    
    //Draws the sky
    background(currentbackground);

    //Drawing Lower Area
    fill("#ffffff");
    rect(10, 10, 380, 70); //Top Frame
    rect(10, 320, 380, 70); //Bottom Frame
    rect(10, 10, 20, 310); //Left Side
    rect(370, 10, 20, 310); //Right Side

    //Adding text to Frame
    fill("#000000");
    textStyle('BOLD');
    textSize(16);
    textAlign(CENTER, CENTER); //Centers the text HORIZONTALLY + VERTICALLY
    text("POLAROID IMAGE", 200, 355);

    //Creating Mountains
    noStroke();
    fill("#161616");
    triangle(30, 320, 110, 180, 200, 320);
    triangle(120, 320, 230, 150, 340, 320);
    triangle(30, 320, 150, 170, 270, 320);
    triangle(100, 320, 290, 200, 370, 320);

    //Drawing the Sun
    fill("#635840");
    ellipse(80, 140, 60, 60);
    


    
 

    
}