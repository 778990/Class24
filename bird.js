class Bird{
    constructor(x,y){
        var Bird_options ={
            restitution:0.8,
            friction:0.3,
            density:1.0,
        }
    
       this.bird = Bodies.rectangle(x,y,50,50,Bird_options);
       this.x = x;
       this.y = y;
       this.width = 50;
       this.height = 50;
        World.add(world,this.bird);
    }
 display(){
     var pos = this.bird.position;
     var angle1 = this.bird.angle;

     pos.x = mouseX;
     pos.y = mouseY;
     push();
     translate(pos.x,pos.y);
     rotate(angle1);
     angleMode(RADIANS);
     rectMode(CENTER);
     strokeWeight(4);
     stroke("pink");
     fill("yellow");
     rect(0,0,this.width,this.height);
     pop();
 }
}