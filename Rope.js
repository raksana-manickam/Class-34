class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            length : 250,
        }

        this.pointB = pointB
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }

    display(){
        var point = this.rope.bodyA.position
        var pointB = this.pointB
        push()
        stroke(48,22,8);
        strokeWeight(5)
        line(pointB.x,pointB.y,point.x,point.y)
        pop()
    }
}