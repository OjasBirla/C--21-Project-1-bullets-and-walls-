var bullet, wall, thickness
var speed, weight;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 25); 
  bullet.shapeColor = color(255, 255, 255);
  thikness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0,0,0);
  speed = random(223, 321);
  weight  = random(30, 52);
  wall.shapeColor = color(80,80,80)
  bullet.velocityX = speed;
  if(bullet.x + bullet.width >= wall.x){
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)
    if(damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
    if(damage > 10){
      wall.shapeColor = color(255, 0, 0)
    }
  }
  drawSprites();
}