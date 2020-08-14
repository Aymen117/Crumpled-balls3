class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.ball = Constraint.create(options);
        World.add(world, this.ball);
    }

    fly(){
        this.ball.bodyA = null;
    }

    display(){
        if(this.ball.bodyA){
            var pointA = this.ball.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}