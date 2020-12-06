class Log{
    constructor(x,y,height,angle){
        var Log_options ={
            restitution:0.8,
            friction:1.0,
            density:1.0,
        }
    
       this.log = Bodies.rectangle(x,y,20,height,Log_options);
       this.x = x;
       this.y = y;
       this.width = 20;
       this.height = height;
       Matter.Body.setAngle(this.log,angle);
        World.add(world,this.log);
    }
 display(){
     var pos = this.log.position;
     var angle1 = this.log.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle1);
     angleMode(RADIANS);
     rectMode(CENTER);
     strokeWeight(4);
     stroke("white");
     fill("brown");
     rect(0,0,this.width,this.height);
     pop();
 }
}