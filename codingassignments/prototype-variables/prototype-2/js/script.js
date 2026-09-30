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

function setup() {
    createCanvas(600, 700);
    
    for (let i = i; i <= 8; i++) {
        sounds.push(new Audio('sounds/note${i}.mp3'));
    }
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
    text("12", 140, 190);
    text("15", 190, 130);
    text("14", 250, 160);
    text("12", 320, 160);
    text("15", 370, 100);
    text("14", 430, 160);
    text("14", 490, 100);
    text("14", 540, 160);
    //Lower Strings
    text("12", 60, 520);
    text("15", 120, 460);
    text("14", 200, 490);
    text("12", 280, 490);
    text("15", 340, 430);
    text("14", 400, 490);
    text("14", 460, 430);
    text("14", 500, 490);

    pop();
}

function mousePressed() {

    if(mouseButton.left) return;

    if (checkNoteClicked(140, 190)) {
        sounds[0].currentTime = 0;
        sounds[0].play();
    }
}

function checkNoteClicked(x,y) {
    return abs(mouseX - x) < 20 && abs(mouseY - y) < 15;
}