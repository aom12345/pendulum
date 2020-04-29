class Ball {
    constructor(x,y,radius) {
      var options ={
          'frictionAir': 0,
          'friction': 0,
          'frictionStatic': 1,
          'inertia': Infinity,
          'restitution': 1.01
      }
      this.body=Bodies.circle(x,y,radius,options);
      World.add(world,this.body);
      this.x=x;
      this.y=y;
      this.radius=radius;
    }
  
    display() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      rotate(angle);
    fill(0);
    ellipse(pos.x,pos.y,this.radius,this.radius);
    pop();
    }
  }
  