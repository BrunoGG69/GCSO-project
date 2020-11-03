var car, wall;
var speed, weight;
var deformation, defornationImg, deformation1;

function preload() {

  deformationImg = loadImage("deformation.png")
}

function setup() {
  createCanvas(800,400);

  car = createSprite(800, 200, 50, 50);

  deformation1 = createSprite(width/2,30,10,10);
  deformation1.addImage("deformationImg", deformationImg);

  car.shapeColor = "white";

  speed = Math.round(random(-55,-90));
  weight = Math.round(random(400,1500));

  car.velocityX = speed;

  deformation = 0.5*weight*speed*speed/22500;

  wall = createSprite(10,200,60,width/2);
  wall.shapeColor = "white";


}

function draw() {
  background(0,0,0);  
  drawSprites();

  color(0,255,0);
  textSize(50);
  text("deformation = " +  Math.round(deformation),200,100);

  if(car.isTouching(wall))
  {
    car.bounceOff(wall);
    car.velocityX = 0;

    if(deformation < 100 )
    {
      car.shapeColor = "green";
    }

    if(deformation > 100 && deformation < 180)
    {
      car.shapeColor = "yellow";
    }

    if(deformation > 180)
    {
      car.shapeColor = "red";
    }
  }

  

  

  /*if(keyDown = "space")
  {
    
  }*/

}