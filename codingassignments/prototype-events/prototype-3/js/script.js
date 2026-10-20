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
//Variable for background image
let backgroundImg;

//Vairable for mystery pokemon
let snorlax;
let answer = "Snorlax";

//Adding wrong names to mix in
let decoys = [
    'Slowbro',
    'Munchlax',
    'Jigglypuff',
    'Gengar',
    'Dragonite',
    'Lapras',
    'Pikachu'
];

let choies = [];
let wrong= [];
let solved = false;
let attempts = 0;
let hoveredSlot= -1;

function preload() {
    backgroundImg = loadImage('assets/images/whosthatpokemonbackground.jpg');
}
function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CORNER);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    image (landscape, 0, 0, width, height);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}