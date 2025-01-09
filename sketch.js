 function setup() {
  createCanvas(1800, 900);
}

function draw() {
  background("white");
  
  // Carom board (square)
  fill(204, 102, 0);
  stroke("black");
  square(600, 150, 600);
  
  // Draw the circles
  fill("black");
  circle(625, 725, 40);
  circle(1175, 725, 40);
  circle(625, 175, 40);
  circle(1175, 175, 40);

  // Left paddle
  fill("red");
  line(690, 630, 690, 250);
  line(710, 630, 710, 250);
  circle(700, 630, 20);
  circle(700, 250, 20);

  // Right paddle
  fill("red");
  line(1100, 630, 1100, 250);
  line(1120, 630, 1120, 250);
  circle(1110, 630, 20);
  circle(1110, 250, 20);

  // Top paddle
  fill("red");
  line(730, 230, 1075, 230);
  line(730, 250, 1075, 250);
  circle(730, 240, 20);
  circle(1080, 240, 20);

  // Bottom paddle
  fill("red");
  line(730, 660, 1075, 660);
  line(730, 640, 1075, 640);
  circle(730, 650, 20);
  circle(1080, 650, 20);

  // Diagonal lines
  fill("black");
  line(650, 700, 780, 580);
  line(1150, 700, 1040, 580);
  line(1020, 315, 1150, 195);
  line(665, 199, 800, 320);
  // //dise
  // fill("blue")
  // circle(mouseX,mouseY,30)

  // Coins in center (10 black coins)
  fill("black");
  let centerX = 900;  // X-coordinate of center
  let centerY = 475;  // Y-coordinate of center
  let radius = 80;    // Radius of the circle where coins will be placed

  // Loop to create 10 coins in a circular pattern in the center
  for (let i = 0; i < 10; i++) {
    let angle = map(i, 0, 10, 0, TWO_PI); // Calculate angle for each coin
    let x = centerX + radius * cos(angle); // X position of the coin
    let y = centerY + radius * sin(angle); // Y position of the coin
    circle(x, y, 20); // Draw each coin
  }
    // Dice (blue circle) only moves when inside the carom board (square)
  fill("blue");
  // Check if the mouse is inside the carom board square
  if (mouseX >= 600 && mouseX <= 1200 && mouseY >= 150 && mouseY <= 750) {
    circle(mouseX, mouseY, 30); // Draw the dice
  }


  

}
