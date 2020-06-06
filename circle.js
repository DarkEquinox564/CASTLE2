class Circle{
    constructor(x,y,di){
        this.body = Bodies.circle(x,y,di);
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.di = di;
    }
    display(){

        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(0,0,this.body.di, this.body.di);
      pop();
        
    }
    
}