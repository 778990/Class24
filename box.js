class Box{
    constructor(x,y,width,height){
        var Box_options ={
            restitution:0.8,
            friction:1,
            density:1.0,
        }
    
       this.box = Bodies.rectangle(x,y,width,height,Box_options);
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
        World.add(world,this.box);
    }
 display(){
     var pos = this.box.position;
     var angle1 = this.box.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle1);
     angleMode(RADIANS);
     rectMode(CENTER);
     strokeWeight(4);
     stroke("green");
     fill("red");
     rect(0,0,this.width,this.height);
     pop();
 }
}