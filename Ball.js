class Ball

{
    constructor(x,y,r)
    {

        var options={
            isStatic:false,
            restitution:1,
            friction:0.3,
            density:1.0

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }

    display()
    
    {

        var pos = this.body.position;
         push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        strokeWeight(3)
        fill("red")
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
         pop()

    }

}