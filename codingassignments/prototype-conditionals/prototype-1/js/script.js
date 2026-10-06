/**
 * Turning Disk
 * Erica Galvez
 * 
 * This prototype is a remake of a normal disk that turns in a rotation using IF statements and mouse pressed. The original vision was to make it quite similar to  old record players, but i want to focus more on its design (conditions) than the aesthetic.
 * 
 */

"use strict";

let angle = 0;
let speed = 0; //
const MAX_SPEED = 0.3; //fastest speed that the disk can spin
function setup() {
    createCanvas(400, 400);
}


/**
 * Use LMB to make the disk rotate faster, and release it to make it slow down. 
*/
function draw() {
    background("#e0dcdc1f");

    if (mouseIsPressed) {
        speed += 0.01;
    } else {
        speed -= 0.005;
    }

    if (speed > MAX_SPEED) {
        speed = MAX_SPEED;
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

    //Details that show the CD is spinning (hard to tell without it)
    noStroke();
    fill("#ffffff60");
    triangle(0, 0, 141, -51, 141, 51);
    triangle(0, 0, -141, -51, -141, 51);

    //Details on the CD
    noFill();
    stroke("#ffffff28");
    strokeWeight(1);
    ellipse (0, 0, 250, 250);
    ellipse (0, 0, 200, 200);
    ellipse (0, 0, 150, 150);
    ellipse (0, 0, 100, 100);

    //Smaller CD
    fill("#b11313");
    ellipse (0, 0, 80, 80);

    //Even smaller CD (Middle Point)
    fill("#ffffff");
    ellipse (0, 0, 15, 15);

    pop();
  
}