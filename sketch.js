var bullet, wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);

  speed=random(55,90)
  weight=random(400,1500)

  thickness=random(22,83)
  bullet.velocityX = speed;

  bullet.shapeColor=color(255)
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80)
  speed=reandom(55,90);
  weight=random(40,1500);
}

function draw() {
  background(0);
  bullet.velocityX=speed;
  console.log(car.x-wall.x) 


  if(wall.x-bullet.x<(car.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}