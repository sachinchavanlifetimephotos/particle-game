var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0; 
var particle1; 
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
   for(var k  = 0; k <=80; k = k +100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 

  for(var k  = 0; k <=200; k = k +100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 

  for(var k  = 0; k <=400; k = k +100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 

  for(var k  = 0; k <=600; k = k +100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 

  for(var k  = 0; k <=800; k = k +100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  } 

  //create 1st row of plinko objects
  for (var j = 50; j <=width; j=j+115) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var h = 20; h <=width-10; h=h+50) 
  {
    plinkos.push(new Plinko(h,175));
  }

  //create 3rd row of plinko objects
  for (var m = 30; m <=width-5; m=m+50) 
  {
    plinkos.push(new Plinko(m,125));
  }

  
  //create 4th row of plinko objects
  for (var l = 15; l <=width-10; l=l+50) 
  {
    plinkos.push(new Plinko(l,215));
  }


  //create particle objects
  for (var p = 40; p <=width-10; p=p+50) 
  {
    plinkos.push(new Plinko(p,10)); 

  } 

 
  



}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();   
  }
   
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();   
  } 

  for (var h = 0; h < plinkos.length; h++) {
    plinkos[h].display();   
  } 

  for (var m = 0; m < plinkos.length; m++) {
    plinkos[m].display();   
  } 

  for (var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();   

    for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
    } 
  
    for (var p = 0; p < plinkos.length; p++) {
      plinkos[p].display();   
    }
  }
  //display the divisions
  

  //display the particles  

 
  for(var a=0; a< Particle.length; a++){ 
    Particle(a).display(); 
  }

  for(var b=0; b<divisions.length; b++){ 
    divisions(b).display(); 
  }


 
if(frameCount%60===0){ 
  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
}



  ground1.display(); 
}