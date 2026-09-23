/**
 * Exploded Thoughts
 * Erica Galvez
 * 
 * This is my second prototype for the assignment: prototype: instructions.
 * It is an abstract piece with a black background and a blue figure standing on the right side of the canvas. 
 * This piece is up for interpretation and can be taken in many different ways. 
 */

"use strict";

function setup() {
    createCanvas(640,640);

}

describe ("This piece is an abstract piece with a black background and a blue figure, resembling an unknown person, meaning it could represent anyone, with an abundance of blue colored lines of different shades coming from the figures head.")

function draw() {
    background('#000000');

    //Abstract Background (Triangles)
    push();
    stroke('#6976ec');
    strokeWeight(1);
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
    fill('#021129');
    triangle (480, 350, 200, 130, -300, -140);
    fill('#0a306d');
    triangle (-9000, 1, -1000, 100, 500, 350);
    fill('#5982c5');
    triangle (270, -58, 360, 1, 530, 425);
    fill('#63799b');
    triangle (630, 1, 560, 1, 500, 350);

    pop();

    //Main Character

    //Head

    push();
    stroke('#3668c7');
    strokeWeight(1);
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
    pop();

}