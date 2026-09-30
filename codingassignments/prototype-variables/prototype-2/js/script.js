/**
 * Sweet Child O' Mine
 * Erica Galvez
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
//An array to hold audio files
let sounds = [];
const notes = [
    //Upper Strings
    {x: 140, y: 190, sound: 0},
    {x: 190, y: 130, sound: 1},
    {x: 250, y: 160, sound: 2},
    {x: 320, y: 160, sound: 3},
    {x: 370, y: 100, sound: 4},
    {x: 430, y: 160, sound: 5},
    {x: 490, y: 100, sound: 6},
    {x: 540, y: 160, sound: 7},
    //Lower Strings
    {x: 60, y: 520, sound: 0},
    {x: 120, y: 460, sound: 1},
    {x: 200, y: 490, sound: 2},
    {x: 280, y: 490, sound: 3},
    {x: 340, y: 430, sound: 4},
    {x: 400, y: 490, sound: 5},
    {x: 460, y: 430, sound: 6},
    {x: 500, y: 490, sound: 7},
];

const soundFiles = [
    "assets/sounds/note1.mp3",
    "assets/sounds/note2.mp3",
    "assets/sounds/note3.mp3",
    "assets/sounds/note4.mp3",
    "assets/sounds/note5.mp3",
    "assets/sounds/note6.mp3",
    "assets/sounds/note7.mp3",
    "assets/sounds/note8.mp3",
];

let currentSound = null;

function setup() {
    createCanvas(600, 700);
    
    //sounds.push(new Audio("assets/sounds/note1.mp3"));
    //sounds.push(new Audio("assets/sounds/note2.mp3"));
    //sounds.push(new Audio("assets/sounds/note3.mp3"));
    //sounds.push(new Audio("assets/sounds/note4.mp3"));
    //sounds.push(new Audio("assets/sounds/note5.mp3"));
    //sounds.push(new Audio("assets/sounds/note6.mp3"));
    //sounds.push(new Audio("assets/sounds/note7.mp3"));
    //sounds.push(new Audio("assets/sounds/note8.mp3"));

    console.log("sounds loaded:", sounds.length); 
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    
    fill("#000000");
    noStroke();
    rect(0, 0, 600, 700);

    //Drawing the lines that the tab will rest on
    push()
    strokeWeight(2);
    stroke("#ececec");
    //Upper Group of Lines
    line (0, 100, 680, 100);
    line(0, 130, 600, 130);
    line(0, 160, 600, 160);
    line (0, 190, 600, 190);
    line(0, 220, 600, 220);
    line (0, 250, 600, 250);
    //Lower Group of Lines
    line(0, 430, 600, 430);
    line(0, 460, 600, 460);
    line(0, 490, 600, 490);
    line(0, 520, 600, 520);
    line(0, 550, 600, 550);
    line(0, 580, 600, 580);
    //Vertical Lines (For Frame)
    //Top Half
    line(15, 250, 15, 100);
    line(585, 100, 585, 250);
    //Bottom Half
    line (15, 580, 15, 430);
    line(585, 430, 585, 580);


    pop();

    //Adding Text (Decoration)
    push()
    fill("#FFFFFF");
    textStyle(BOLD);
    textSize(80);
    textAlign(CENTER, CENTER);
    text("4", 60, 210);
    text("4", 60, 145);
    pop();

    //Lines of Tab
    push()
    fill("#FFFFFF");
    textStyle('BOLD');
    textSize(30);
    textAlign(CENTER, CENTER); 

    //Singular Notes/Tabs
    //Upper Strings
    tabText("12", 140, 190);
    tabText("15", 190, 130);
    tabText("14", 250, 160);
    tabText("12", 320, 160);
    tabText("15", 370, 100);
    tabText("14", 430, 160);
    tabText("14", 490, 100);
    tabText("14", 540, 160);
    //Lower Strings
    tabText("12", 60, 520);
    tabText("15", 120, 460);
    tabText("14", 200, 490);
    tabText("12", 280, 490);
    tabText("15", 340, 430);
    tabText("14", 400, 490);
    tabText("14", 460, 430);
    tabText("14", 500, 490);

    pop();
}

function mousePressed() {
    if(!mouseButton.left) return;

    for (let n of notes) {
        if (checkNoteClicked(n.x, n.y)) {

        if (currentSound) currentSound.pause();

        currentSound = new Audio(soundFiles[n.sound]);
        currentSound.play();
        console.log("playing:", soundFiles[n.sound]);

        }
    }
    
}

function checkNoteClicked(x,y) {
    return abs(mouseX - x) < 20 && abs(mouseY - y) < 15;
}

//function that outlines if the mouse is pressed on it
function tabText(label, x, y) {
    if(mouseIsPressed && mouseButton.left && checkNoteClicked(x, y)) {
        stroke("#791111");
        strokeWeight(9);
    } else {
        noStroke();
    }
    text(label, x, y);
}