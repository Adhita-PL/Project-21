var bullet, wall;
var speed, weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52);
  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.shapeColor = "white";
  sprite = createSprite(800,400,windowWidth,20);
  sprite.shapeColor = "white";
}

function draw() {
  background(0); 
  bullet.velocityX = speed;
  //if(hasCollided(bullet,wall)) {
    //bullet.velocityX = 0;
    //var damage=0.5 * weight* speed * speed/(thickness*thickness*thickness);
    //if(damage>10) {
      //wall.shapeColor = color(255,0,0);
    //}
    //if(damage<10) {
      //wall.shapeColor = color(0,255,0);
    //}
  //}
  if(bullet.isTouching(wall)) {
    bullet.velocityX = 0;
    var damage=0.5 * weight* speed * speed/(thickness*thickness*thickness);
    if(damage>10) {
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10) {
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
//function hasCollided() {
  //bulletRightEdge = bullet + bullet.width;
  //wallLeftEdge = wall.x;
  //if(bulletRightEdge>=wallLeftEdge) {
    //return  true;
 // }
 //// return false;
//}
