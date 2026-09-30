/**
 * Circled Sun
 * Erica Galvez
 * 
 * This prototype is meant to micmic the rotation of planets around the sun. 4 things can be seen. (1)Stars, (2)Sun (3)Earth and (4)Mars
 */

"use strict";

let rotationAmount = 0;
let stars = [];

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);

    //Randomized stars
    for (let i = 0; i < 60; i++) {
        stars.push({
            x: random(width),
            y: random(height),
            size: random (1, 3),
            offset: random(360)
        });
    }
}

//Draws Stars + Sun + Planet (each frame)
function draw() {
    background("#000000");
    rotationAmount += 1;

    drawStars();
    drawSun();
    drawEarth();
    drawMars();
}

function drawStars() {
    noStroke();
    for (let star of stars) {
    let brightness = map(sin(rotationAmount * 2 + star.offset), -1, 1, 80, 255);
    fill(255, brightness);
    ellipse(star.x, star.y, star.size);
    }
}

function drawSun(){
    push();
    //Rotation
    translate(width / 2, height / 2);
    rotate (rotationAmount);

    //Draws the sun
    noStroke();
    fill("#a78f24");
    ellipse(0, 0, 140, 115);
    pop ();
}

function drawEarth(){
    push();
    //Rotation
    translate(width/2, height/2);
    rotate (-rotationAmount);

    //Draws the earth
    noStroke();
    fill("#2b7025");
    ellipse (100, 100, 70);
    pop ();
}

function drawMars() {
    push();
    translate(width/2, height/2);
    rotate(rotationAmount * 0.5); 
    noStroke();
    fill("#B5482A");
    ellipse(170, 0, 25);
    pop();
}