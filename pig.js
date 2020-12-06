class Pig{
    constructor(x,y){
        var Pig_options ={
            restitution:0.8,
            friction:0.3,
            density:1.0,
        }
    
       this.pig = Bodies.rectangle(x,y,50,50,Pig_options);
       this.x = x;
       this.y = y;
       this.width = 50;
       this.height = 50;
        World.add(world,this.pig);
    }
 display(){
     var pos = this.pig.position;
     var angle1 = this.pig.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle1);
     angleMode(RADIANS);
     rectMode(CENTER);
     strokeWeight(4);
     stroke("black");
     fill("green");
     rect(0,0,this.width,this.height);
     pop();
 }
}