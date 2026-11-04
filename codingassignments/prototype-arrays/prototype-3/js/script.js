/**
 * Spiderman: Words of Inspiration
 * Erica Galvez
 * 
 * My aim for this prototype is to make an array using texts! The project aims to inspire those who are big fans of the Spiderman series! Speak with spiderman as he swings around the city!
 */

"use strict";

//Variables
let spidermanImg;
let box;
let quotes = [
    "That's all it is, Miles. A leap of faith.",
    "Sometimes to do what's right, we have to be steady and give up the thing we want most. Even our dreams.",
    "You're not a nobody, you're somebody!",
    "We always have a choice, and we can always choose to do what's right.",
    "You can't be a friendly neighborhood Spider-Man if there's no neighborhood.",
    "Everyone keeps telling me how my story is supposed to go! Nah, ima do my own thing",
    "What's important is not standing by and allowing someone to suffer or die because you do nothing",
    "I will never forget these words: with great power, comes great responsibility."
];

let index= 0;

//Variables for textbox

const BOX_X= 40;
const BOX_Y= 40;
const BOX_W= 480;
const BOX_H= 190;


function preload() {
    spidermanImg = loadImage("assets/images/spiderman.png");
    box = loadImage("assets/images/textbox.png");

}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    // createCanvas(windowWidth, windowHeight)
    createCanvas(1080, 720);
    textAlign((CENTER), CENTER)

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#000000");
    //Draws background spiderman image
    image(spidermanImg, 0,0, width, height);
    //Draws textbox image
    image(box, BOX_X, BOX_Y, BOX_W, BOX_H, 80, 90, 510, 175);

    //Text area inside the box (so the text doesnt touch the border)
    let padX = 35;
    let padY = 28;
    let tx = BOX_X + padX;
    let ty = BOX_Y + padY;
    let tw = BOX_W - padX * 2 - 15;
    let th = BOX_H - padY * 2 - 15;
    
}
//s stands for = Size
// str stands for = string
function fitTextSize(str, w, h) {
    for (let s = 34; s > 10; s--) {
        textSize(s);
        let lineH = s * 1.15;
        let words = str.split("");
        let lines = 1;
        let line = ""
        for (let word of words) {
            let test = line === "" ? word: line + " " + word;
            if (textWidth(test) > w) {
                lines++;
                line = word;
            }else {
                line = test;
            }
        }
        if (lines * lineH <= h) return s;
    }
    return 10;
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight)
// }