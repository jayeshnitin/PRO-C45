var spaceShip, spaceShipImg;
var bgimg;
var earth, earthImg;

function preload(){

bgimg = loadImage('Space-Free-Download-PNG.png');
spaceShipImg = loadImage('kindpng_490799.png');
earthImg = loadImage('Earth-Free-Download-PNG.png');

}

function setup() {
  createCanvas(1300,750);

  spaceShip = createSprite(600, 200, 20, 20);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.15;

  earth = createSprite(650, 650, 20, 20);
  earth.addImage(earthImg);
  earth.scale = 0.70;
}

function draw() {
  background(bgimg);  

  spaceShip.x = mouseX;
  spaceShip.y = mouseY;

  drawSprites();
}

//in this game a space ship is trying to save the earth from asteroid