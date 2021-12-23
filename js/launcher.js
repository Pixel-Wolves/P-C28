class launcher{
    constructor(bodyA,pointB,lenght){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            lenght : lenght,
        }

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA != null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
    
            strokeWeight(4);
            stroke(84,39,15);

            if(pointA.x < 220){
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            else{
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
        }
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
}