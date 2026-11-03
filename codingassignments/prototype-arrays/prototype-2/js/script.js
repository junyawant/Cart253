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

let titles = ["Conan Gray - Astronomy", "Sufjan Stevens Remaster - Futile Devices - Baptiste Robert (Baptiste R.)", "Syd Matters - Obstacles - Syd matters", "Syd Matters - To All of You - Syd matters" ] 
let files = ["astronomy", "futileDevices", "obstacles", "toallofyou"];

function preload() {
    landscape = loadImage("assets/images/train.jpg");

    for (let i = 0; i < files.length; i++) {
        songs.push(loadSound("assets/sounds/" + files[i] + ".mp3"));
    }
}

/**
 * Loads the canvas and centers imges + text
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CENTER);
    textAlign(CENTER);
}

/**
 * Draws the background and song title(s)
*/
function draw() {
    background("#000000");

    //Draws the background image (train)
    image(landscape, width / 2, height / 2, width, height);

    //Text for song title 
    fill("#FFFFFF");
    textSize(min(width, height) * 0.05);
    textStyle(BOLD);
    text(titles[currentSong], width / 2, height * 0.1);
    textSize(min(width, height) * 0.03);
    textStyle(NORMAL);
    text("Track " + (currentSong + 1) + " of " + songs.length, width / 2, height * 0.15);

    drawButtons();
}

function drawButtons() {
    let y = height * 0.9;
    let gap = min (width, height) * 0.15;
    let s = min(width, height) * 0.04;

    //PREVIOUS --> TRIANGLE POINTING LEFT
    rect(width / 2 - gap - s, y - s, s * 0.3, s * 2); 
    triangle(width / 2 - gap - s * 0.5, y,
             width / 2 - gap + s, y - s,
             width / 2 - gap + s, y + s);

    //NEXT --> TRIANGLE POINTING RIGHT
    triangle(width / 2 + gap - s, y - s,
             width / 2 + gap - s, y + s,
             width / 2 + gap + s * 0.5, y);
    rect(width / 2 + gap + s * 0.7, y - s, s * 0.3, s * 2);
    
}

//This function checks which button was clicked 
//(Measures the distance from the house to each button's center)

function mousePressed() {
    let y = height * 0.9;
    let gap = min(width, height) * 0.15;
    let hitSize = min(Width, height) * 0.06;
    

}

function playSong() {
    if (isPlaying) {
        songs[currentSong].pause();
        isPlaying = false;
    } else {
        songs[currentSong].play();
        isPlaying = true;
    }

function nextSong() {
    songs[currentSong].stop();
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    if (isPlaying) {
        songs[currentSong].play();
    }

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}