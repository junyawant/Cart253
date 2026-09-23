/**
 * Flowers Plus
 * Erica Galvez
 * 
 * This project is meant to be weird, yet representative. While it can definitely seem creative, having flowers represented in this way can look odd. 
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640,640);

}


function draw() {
    background('#dfe2b2');

//Lines that serves as "Branches"
    //Main Branch 
    push()
    strokeWeight(8);
    line (640, 0, 480, 100);
    line (480, 100, 320, 260);
    pop()

    push()
    strokeWeight(7);
    line (320, 260, 180, 360);
    pop()

    strokeWeight(5);
    line (180, 360, 40, 420);

    strokeWeight(3);
    line (90, 400, 60, 440);

    strokeWeight(5);
    line (140, 330, 250, 310);

    strokeWeight(4.5);
    line (40, 420, 0, 450); //Thin branch that extends off the canvas

    //Upper Branch
    strokeWeight(6);
    line (320, 260, 220, 180);

    strokeWeight(4);
    line (220, 180, 100, 140);

    //Lower Branch
    strokeWeight(7);
    line (480, 100, 460, 250);

    strokeWeight(6);
    line (460, 250, 440, 400);
    
    strokeWeight(5);
    line (440, 400, 380, 520);

    strokeWeight(4);
    line (440, 400, 350, 450);

    //Small Twigs/Thorns
    strokeWeight(1.5);
    line(220, 180, 150, 110);
    line(180, 360, 120, 320);

    //Twigs Near Right Side
    line(460, 250, 520, 280);
    line(440, 400, 500, 450);

    //Other Thorns
    line(350, 320, 360, 210);
    line(250, 310, 260, 290);
    line (470, 180, 490, 170);

    //Random Plus Signs 
    //PS = Plus Sign

    //PS Far Left
    //Top Square
    rect (70, 90, 30, 30);
    //Middle Square
    fill('#e47877');
    rect (70, 120, 30, 30);
     rect (100, 120, 30, 30);
    //Lower Square
    rect (70, 150, 30, 30);
    //Left Square
    rect (40, 120, 30, 30);
    //Right Square
   
    //PS Above Far Left One
    //Top Square
    rect (120, 55, 20, 20);
    //Middle Square
    rect (120, 75, 20, 20);
    //Bottom Square
    rect (120, 95, 20, 20);
    //Right Square
    rect (140 ,75, 20, 20);
    //Left Square
    rect (100, 75, 20, 20);

    //PS Under Far Left PS'
    //Top Square
    rect (120, 300, 30, 30);
    //Middle Square
    rect (120, 330, 30, 30);
    //Bottom Square
    rect (120, 360, 30, 30);
    //Right Square
    rect (150, 330, 30, 30);
    //Left Square
    rect (90, 330, 30, 30);
    
    //PS Top Far Right Next to Big PS
    //Top Square
    rect (495, 10, 25, 25,);
    //Middle Square
    rect (495, 35, 25, 25);
    //Bottom Square
    rect (495, 60, 25, 25);
    //Right Square
    rect (520, 35, 25, 25);
    //Left Square 
    rect (470, 35, 25, 25);

    //Big PS Top Far Right
    //Right Square
    rect (590, -10, 38, 38);
    //Middle Square
    rect (555, -10, 38, 38);
    //Left Square
    rect (520, -10, 38, 38);
    //Bottom Square
    rect (555, 30, 38, 38);

    //PS Sign Below Big PS Sign
    //Top Square
    rect (570, 240, 29, 29,);
    //Middle Square
    rect (570, 270, 29, 29);
    //Bottom Square
    rect (570, 300, 29, 29);
    //Right Square
    rect (600, 270, 29, 29);
    //Left Square 
    rect (540, 270, 29, 29);

    //PS Next to the one Below the Big PS
    //Top Square
    rect (425, 225, 25, 25);
    //Middle Square
    rect (425, 250, 25, 25);
    //Bottom Square
    rect (425, 275, 25, 25);
    //Right Square
    rect (450, 250, 25, 25);
    //Left Square
    rect (400, 250, 25, 25);

    //PS Below Above (^) PS
    //Top Square
    rect (340, 300, 35, 35);
    //Middle Square
    rect (340, 270, 35, 35);
    //Bottom Square
    rect (340, 335, 35, 35);
    //Right Square
    rect (375, 303, 35, 35);
    //Left Square
    rect (305, 303, 35, 35);

    //PS Below to the Left of PS Above (^)
    //Top Square
    rect (320, 450, 39, 39);
    //Middle Square
    rect (320, 490, 39, 39);
    //Bottom Square
    rect (320, 530, 39, 39);
    //Right Square
    rect (360, 490, 39, 39);
    //Left Square
    rect (280, 490, 39, 39);

    //Big PS Next to PS Above (^)
    //Top Square
    rect (480, 390, 45, 45);
    //Middle Square
    rect (480, 435, 45, 45);
    //Bottom Square 
    rect (480, 480, 45, 45);
    //Right Square 
    rect (525, 435, 45, 45);
    //Left Square
    rect (435, 435, 45, 45);
}