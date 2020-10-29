var car,wall;
var speed,weight;
var Deformation;
var carRating;


function setup() {
  createCanvas(1600,400);
  speed=random(50,190);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX=speed/10; 
  wall=createSprite(1500,200,30,height/2);

}

function draw() {
  background(255,255,255);  
  console.log(speed);
  if (wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
  



Deformation= (0.5*weight*speed*speed)/22500;
if (Deformation<100){
  text("CarRating is A",500,40);
  car.shapeColor="green";
}
else if (Deformation > 100 && Deformation < 180){
  text("CarRating is B",500,40);
  car.shapeColor="orange";
}


else if ( Deformation > 180){
  text("CarRating is C",500,40);
  car.shapeColor="red";
 }
}

 











  drawSprites();
}


