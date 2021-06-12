class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.polygon=loadImage("polygon_img")
        //this.sling2=loadImage("sprites/sling2.png")
      //  this.sling3=loadImage("sprites/sling3.png")
        this.pointB = pointB
        this.polygon = Constraint.create(options);
        World.add(world, this.polygon);
    }

    fly(){
        this.polygon.bodyA = null;
    }

    display(){
        image(this.polygon,40,40)
        //image(this.sling2,175,20)
        if(this.polygon.bodyA){
            var pointA = this.polygon.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            if(pointA.x<220){
                line(pointA.x, pointA.y, pointB.x+30, pointB.y);
                line(pointA.x, pointA.y, pointB.x-20, pointB.y);
                image(this.polygon,pointA.x-25,pointA.y-10,15,30);
              

            }
           else{
            line(pointA.x, pointA.y, pointB.x+30, pointB.y);
            line(pointA.x, pointA.y, pointB.x-20, pointB.y);
            image(this.polygon,pointA.x+25,pointA.y-10,15,30);

           }
        }
    }
    
}