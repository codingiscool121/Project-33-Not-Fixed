class plinko{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution:1,
            friction:0
         
        }
        this.radius = 10;
        // this.x = x;
        // this.y = y;
        this.body = Bodies.circle(x ,y , this.radius,options );
        World.add(world, this.body);
       
  
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle
        push();
        fill("pink");
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
       
       pop();
       
      }
    };

