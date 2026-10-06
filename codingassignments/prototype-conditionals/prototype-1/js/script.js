/**
 * Turning Disk
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 * 
 * Some ideas for all 3 prototypes:
 * - Make a disk that turns using IF statements (?)
 * - A target symbol that changes position based on mouse position (?)
 * - A clock that has hands that move based on the time of day (?)
 * 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let angle = 0;
let speed = 0; //
const MAX_SPEED = 0.1; //fastest speed that the disk can spin
function setup() {
    createCanvas(400, 400);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#e0dcdc30");

    if (mouseIsPressed) {
        speed += 0.01;
    } else {
        speed -= 0.05;
    }

    if (speed > MAX_SPEED) {
        spped = MAX_SPEED;
    }

    if (speed < 0) {
        speed = 0;
    }
    
    angle += speed;

    push();
    translate(200, 200);
    rotate(angle);
    
    //Drawing the CD Disk
    //Bigger CD
    noStroke();
    fill("#000000");
    ellipse (0, 0, 300, 300);

    //Smaller CD
    fill("#b11313");
    ellipse (0, 0, 80, 80);

    //Even smaller CD (Middle Point)
    fill("#ffffff");
    ellipse (0, 0, 15, 15);
    
    //Details on the CD
    nofill();
    stroke("#ffffff20");
    strokeWeight(1);
    ellipse (0, 0, 250, 250);
    ellipse (0, 0, 200, 200);
    ellipse (0, 0, 150, 150);
    ellipse (0, 0, 100, 100);
  



}