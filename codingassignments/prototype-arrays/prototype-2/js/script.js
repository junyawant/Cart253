/**
 * Harmony on the Way Home
 * Erica Galvez
 * 
 * My idea for this prototype is still being developed.
 * Here are my ideas:
 * 1. A speech of motivational quote displayed on screen (usings arrays)
 * 2. Cycling through songs using arrays (?)
 */

"use strict";

//Variables
let landscape;
let songs = [];
let currentSong = 0;
let isPlaying = false;

function preload() {
    landscape = loadImage("assets/images/train.jpg");

    for (let i = 0; i < files.length; i++) {
        songs.push(loadSound("assets/sounds/" + files[i] + ".mp3"));
    }
}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#000000");
    image(landscape, width / 2, height / 2, width, height);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}