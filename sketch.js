var Dog,Road,Car,Obstacles;
var RoadImg;
function preload()
{
	//RoadImg=loadImage("images.jpg")
}

function setup() {
	createCanvas(1400, 600);
	Dog=createSprite(50,250,30,20)
    Road=createSprite(700,300,1400,50)
    //Road.addImage(RoadImg)
}


function draw() {

  background('Blue');
  if(KeyDown(UP_ARROW)){
	Dog.y-=3
  }

  if(KeyDown(DOWN_ARROW)){
	Dog.y+=3
  }

  if(KeyDown("RIGHT_ARROW")){
	Dog.x+=2
  }

  if(KeyDown("LEFT_ARROW")){
	Dog.x-=2
  }

  drawSprites()
 
}

function SpawnCars(){

if(frameCount%200){


}


}

function SpawnObstacles(){

if(frameCount%150){

	
}

}




