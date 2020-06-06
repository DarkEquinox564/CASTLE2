class Triangle{
    constructor(x,y,sides,radius,angle){
        var options = {
            isStatic: true
        }

        this.body = Bodies.polygon(x,y,sides,radius,options);
        this.body.position.x = x
        this.body.position.y = y
        this.body.sides = sides
        this.body.radius = radius
        Matter.Body.setAngle(this.body, angle);

        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        var ver = this.body.vertices;
        fill(255);
        triangle(ver[0].x,ver[0].y,ver[1].x,ver[1].y,ver[2].x,ver[2].y);
      }
}