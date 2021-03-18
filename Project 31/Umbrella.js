class Umbrella{

    constructor(x,y){
        var options={
            isStatic:true,
            friction:0.01
        }

        this.body=Bodies.circle(x,y,150,options);
        this.x=x;
        this.y=y;
        this.radius=150/30;
        this.image=loadImage("Walking Frame/walking_1.png" );

        World.add(world,this.body);
    }

    display(){

        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image,-25,0,this.radius*110,this.radius*77);
        pop();

    }
}