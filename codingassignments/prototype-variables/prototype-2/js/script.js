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
function setup() {
    createCanvas(600, 700);

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
    text("12", 140, 190);
    text("15", 200, 130);
    text("14", 260, 160);
    text("12", 320, 160);
    text("15", 380, 100);
    text("14", 420, 160);
    text("14", 480, 100);
    text("14", 540, 160);


    pop();

}