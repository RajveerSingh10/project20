var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  thickness=random(22,83);
  wall=createSprite(1200,200,thickness,height/2);
 backgroundColour("black");
  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bulletWeight(30,52);
  bulletSpeed(223,321);
  bullet.collide(wall);
}
function hasCollided(bullet,wall){
  bulletRightEdge=1bullet.x+1bullet.widht;
  wallLeftEdge=1wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;

  if (hasCollided(bullet,wall)){
    bullet.velocity=0;
    var damage=0.5*weight*speed*speed/(thickenness*thickness*thickness);

    if (damage>10)  

wall.shapeColour=colour(255,0,0);


if (damage>10)
wall.shapeColour=colour(0,255,0);

  }
  
}
