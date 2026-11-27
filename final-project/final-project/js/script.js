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

//Setting up my variables
// let objects = [] //this loads my models (individual ones)
let room; //loading in the full room without individually imported objects yet)

// function preload() {
//     room = loadModel("assets/individualroom.obj", true);
// }

async function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    //await = found in loadModel() reference (REMINDER IF STUCK)
    //Essentially -> waits for the room .obj file to load, then stores it in "room"
    room = await loadModel("assets/individualroom.obj", true);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(30);
    if (!room) return; //skip drawing until the model has finished loading

    orbitControl(); //allows me to drag, scroll, and pan around the 3D space

    scale(200);
    noStroke();
    fill(200);
    model(room);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}