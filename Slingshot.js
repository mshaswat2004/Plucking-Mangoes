class Slingshot {
    constructor(bodyA, pointA){
        var options = {
            bodyA : bodyA,
            pointA : pointA, 
            stiffness : 0.2 ,
            length : 10 
        }
       this.pointB = pointB ;
        this.sling = Constraint.create(options) 
        world.add(world, this.sling)
    }
    fly () {
        this.sling.bodyA = null
    }
    display() {
        if(this.body.bodyA){
            var pointA, pointB ;
            pointA = this.sling.bodyA.position 
            pointB = this.sling.pointB 
            strokeWeight(4) ;
            line (pointA.x, pointA.y,pointB.x, pointB.y)
        }
        

    }
}