let f = 0.0;
let numIters;
let spc;
var bgColor;

function setup() { 
  createCanvas(400, 400);
	numIters = 10; 
  spc = width / numIters;

  //random background color
	bgColor =color( random(255), random(255), random(255) );
  myFunction();
} 


function draw() { 
  background(bgColor);
  myFunction();

  //moving 
  f+= 0.01;

  for (let i = 0; i < numIters; i++) {
    for (let j = 0; j < numIters; j++) {
     
      push();
      
      // move to the current location 
      translate(spc/4 + i * spc, spc/4 +  j * spc);
      drawAMohr( i + 1, j + 1);
      
      pop();
    }
  }

  
}

//random background color everytime mouse is pressed 
function mousePressed(){
	bgColor = color( random(255), random(255), random(255) );
}


//the second layer: triangle grid 
function  myFunction(){
  for (let x=0; x<width; x+=width/10){
   for (let y=0; y<height; y+=height/10){

    push()
    noFill();
    triangle(x, height/10+y,width/20 +x,y, width/10+x, y);
    pop()
    fill(100, 210, 150);
    circle(x, y+height/10, width/20);
   }
  }
}


//the third layer : create moving shapes inside the grid 

function drawAMohr(i, j)
{
  beginShape();
  for (let k = 0; k < 5; k++) {
    vertex(noise( i, j *k + f ) * spc - spc/20, noise( k * j, i + f) * spc  - spc/4);
    
  }

  endShape();
}



