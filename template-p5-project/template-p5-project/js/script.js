/**
 * Domo Monster
 * Erica Galvez
 * 
 * This is my first prototype for my Prototype: Instructions assignment. 
 * I have the character Domo drawn in my p5.js project.
 * 
 */

"use strict";

function setup() {
    describe("This is a recreation of the character Domo. He is a brown monster often drawn with a large, open mouth and sharp teeth. He has two fully filled black eyes. There is another variation of his character that can sometimes be pink!")
    createCanvas(640, 640);
}

function draw() {
    background('#654236');

    // Domo's Eyes
    fill('#000000'); 
    ellipse (150, 200, 90, 90); // Domo's Left Eye
    ellipse (500, 200, 90, 90); // Domo's Right Eye

    //Domo's Mouth (OUTLINE)
    fill('#000000'); 
    rect(147, 300, 350, 290, 30); 

    //Domo's Mouth (INNER AREA)
    fill('#930718');
    rect(160, 310, 325, 270, 30);

    //Domo's Teeth (OUTLINE FOR THE UPPER ROW)
    fill('#000000');
    triangle (160, 310, 220, 310, 190, 360); //First Tooth (Far Left)
    triangle (210, 310, 270, 310, 240, 360); //Second Tooth (Far Left)
    triangle (260, 310, 320, 310, 290, 360); //Third Tooth (Middle Left)
    triangle (310, 310, 370, 310, 340, 360); //Fourth Tooth (Middle Right)
    triangle (360, 310, 420, 310, 390, 360); //Fifth Tooth (Far Right)
    triangle (410, 310, 470, 310, 440, 360); //Sixth Tooth (Far Right)

    //Domo's Teeth (UPPER ROW)
    fill('#FFFFFF');
    triangle (170, 310, 210, 310, 190, 350); //First Tooth (Far Left)  
    triangle (220, 310, 260, 310, 240, 350); //Second Tooth (Far Left)
    triangle (270, 310, 310, 310, 290, 350); //Third Tooth (Middle Left)
    triangle (320, 310, 360, 310, 340, 350); //Fourth Tooth (Middle Right)
    triangle (370, 310, 410, 310, 390, 350); //Fifth Tooth (Far Right)
    triangle (420, 310, 460, 310, 440, 350); //Sixth Tooth (Far Right)

    //Domo's Teeth (OUTLINE FOR THE LOWER ROW)
    fill('#000000');
    triangle (160, 580, 218, 580, 190, 530); //First Tooth (Far Left)
    triangle (210, 580, 270, 580, 240, 530); //Second Tooth (Far Left)
    triangle (260, 580, 320, 580, 290, 530); //Third Tooth (Middle Left)
    triangle (310, 580, 370, 580, 340, 530); //Fourth Tooth (Middle Right) 
    triangle (360, 580, 420, 580, 390, 530); //Fifth Tooth (Far Right)
    triangle (410, 580, 470, 580, 440, 530); //Sixth Tooth (Far Right)

    //Domo's Teeth (LOWER ROW)
    fill('#FFFFFF');
    triangle (170, 580, 210, 580, 190, 540); //First Tooth (Far Left)
    triangle (220, 580, 260, 580, 240, 540); //Second Tooth (Far Left)
    triangle (270, 580, 310, 580, 290, 540); //Third Tooth (Middle Left)
    triangle (320, 580, 360, 580, 340, 540); //Fourth Tooth (Middle Right)
    triangle (370, 580, 410, 580, 390, 540); //Fifth Tooth (Far Right)
    triangle (420, 580, 460, 580, 440, 540); //Sixth Tooth (Far Right)

}