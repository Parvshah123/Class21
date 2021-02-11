function setup(){

  maze1 = createSprite(200,100,50,100);
  maze1.shapeColor = "green";

  maze2 = createSprite(300,200,80,150);
  maze2.shapeColor = "green";

  maze3 = createSprite(400,300,40,110);
  maze3.shapeColor = "green";

  maze4 = createSprite(100,400,20,200);
  maze4.shapeColor = "green";

  ball = createSprite(250,250,35,35);
  ball.shapeColor = "blue";
}

function draw(){
  
  background("yellow");

ball.x = World.mouseX;
ball.y = World.mouseY;

if(col(ball,maze1)){

  ball.shapeColor = "red";
  maze1.shapeColor = "black";

}

else{

  ball.shapeColor = "blue";
  maze1.shapeColor = "green";
}
  drawSprites();
}