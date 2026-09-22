/**
 * Title of Project
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
    createCanvas(640,640);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('#000000');

    //Abstract Background
    fill('#07214b');
    triangle (500, 350,10, 200, 1, 100);
    fill('#234883');
    triangle (490, 340, 1, 600, -20, 700);
    fill('#021129');
    triangle (500, 350, 640, 200, 640, 100);
    fill('#7291c4');
    triangle (-1, 370, 1, 400, 530, 340);
    fill('#11469b');
    triangle (100, 1, 200, 1, 530, 400);
    fill('#3e629b');
    triangle (500, 1, 400, 1, 500, 355);
    fill('#5287dd');
    triangle (500, 340, -200, 500, -200, 600);

    

    //Main Character

    //Head
    fill('#011638');
    ellipse(500, 350, 50, 50);

    //Torose
    fill('#011638');
    rect (465, 375, 70, 100, 10);

    //Arms
    fill('#011638');
    rect (430, 375, 35, 100, 10);
    rect (535, 375, 35, 100, 10);

    //Legs
    fill('#011638');
    rect (465, 475, 35, 100, 10);
    rect (505, 475, 35, 100, 10);



    

}