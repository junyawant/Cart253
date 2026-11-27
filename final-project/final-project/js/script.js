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
    //This adds some sort of "Camera clipping"
    // It sets how close and how far things can be before the camera stops drawing them
    //In blender, there is a similar setting such as "Depth" which limits how much of a model you can see within your scene before it is "covered in grey" -> easier to visualize and shown in journal
    perspective(PI / 3, width / height, 1, 10000);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(30);
    if (!room) return; //skip drawing until the model has finished loading

    orbitControl(); //allows me to drag, scroll, and pan around the 3D space
    ambientLight(90);
    directionalLight(130, 130, 130, 0.3, 0.8, -0.5);

    scale(100);
    rotateX(PI); //blender's orientation of up is p5's orientation of down, this makes it so that my room is now loaded in the wrong way (normal view of a room and not an upside down one)
    noStroke();  // In this 3D view, nostroke is used to turn off the outline that p5 draws by default around every triangle of a model
    // fill(200);
    model(room);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}