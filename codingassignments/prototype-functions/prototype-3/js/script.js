/**
 * Skip Counts
 * Erica Galvez
 * 
 * My vision for this project is another useful tool that would make my life easier while tutoring! 
 * Every thursday afternoon, right before the timed multiplications (prototype 1), we do skip counts! 
 * 3 random numbers that my students have to multiply (10 products of each number)
 */

"use strict";

//Variables
let numbers = []; //the 3 random random numbers

/**
 * Creates the canvas and picks the first 3 numbers
*/
function setup() {
    createCanvas(400, 600);
    numbers = generateNumbers();
    noLoop(); // basically --> only redraw when the user clicks using the mouse
}

/**
 * Draws the 4 numbers one after the other (under each other i guess you could say)
*/
function draw() {
    background("#FFFFFF");

    for (let i = 0; i < numbers.length; i++) {
        drawNumber(numbers[i], 100 + i * 200);
    }

}

//This functions draws the 3 numbers on the screen
function drawNumber(num, y) {
    fill("#000000");
    noStroke();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(120);
    text(num, width/2, y);
}

function generateNumbers() {
    let result = [];

    while (result.length < 3) {
        let n = floor(random(2, 13)) //numbers 2 up to 12
        if (!result.includes(n)) { //only add it if its new
            result.push(n);
        }
    } 
    return result;
}

//This functions makes it so that u can click anywhere on the canvas to get 3 new numbers
function mousePressed() {
    numbers = generateNumbers();
    redraw();
}