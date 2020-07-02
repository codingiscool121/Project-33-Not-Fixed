const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Event = Matter.Event;
var engine;
//var width = width;
var particles = []
var particle;
var plinkos = []
var divisions = []
var divisionheight = 300
var score = 0;
var count = 0;
// var turn = 0;
var gameState = "start";


function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	//Engine.run(engine);
  
  //yellow line
  var line = createSprite(400,400,800,10);
  line.shapeColor = "yellow";
    
	floor = new Ground(400,790,800,20);

	for(var k=0; k <= width; k= k + 80){
		divisions.push(new Divisions(k,height-divisionheight/2,10,divisionheight));
	}
	
	for(var j = 40; j <=width;j=j+50){
		plinkos.push(new plinko(j,75));
	}
	
	for(var j = 15; j <= width;j=j+50){
		plinkos.push(new plinko(j,175));
	}
	
	
	
	
	}


function draw() {
  background(0);
  textSize(30);
  fill("green");
  text("Score : "+score,650,40);
  textSize(20);
  fill("green");
  text("500",30,600);
  textSize(20);
  fill("green");
  text("500",100,600);
  textSize(20);
  fill("green");
  text("500",180,600);
  textSize(20);
  fill("green");
  text("500",260,600);
  textSize(20);
  fill("green");
  text("500",340,600);
  textSize(20);
  fill("green");
  text("100",420,600);
  textSize(20);
  fill("green");
  text("100",500,600);
  textSize(20);
  fill("green");
  text("100",580,600);
  textSize(20);
  fill("green");
  text("200",660,600);
  textSize(20);
  fill("green");
  text("200",740,600);
  Engine.update(engine);
  floor.display();

if(gameState === "end"){
  textSize(100);
  fill("red");
  text("GAME OVER.",150,250);
}


  for(var i=0;i<plinkos.length;i++){
	  plinkos[i].display()
  }



  if(frameCount%90===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}
  
for(var j = 0; j<particles.length;j++){
	particles[j].display();
}

 

 if(particle!=null){
  particle.display();
  if(particle.body.position.y>760){

   if(particle.body.position.x<300){
       score = score+500;
       particle=null;
       if(count>=5) gameState ="end";
   }
  else if(particle.body.position.x>301 && particle.body.position.x<600){
        score = score+100;
        particle=null;
        if(count>=5) gameState ="end";
    }
   
  
 
else if(particle.body.position.x>601 && particle.body.position.x<900){
            score = score+200;
            particle=null;
            if(count>=5) gameState ="end";
        }
       

}
 }
for(var k=0; k<divisions.length;k++){
  divisions[k].display();
}

 



 
drawSprites();
 
}



function mousePressed(){
	if(gameState!=="end"){
		count++;
		particle = new Particle(mouseX,10,10,10);
	}
}