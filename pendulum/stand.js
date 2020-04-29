class Stand_h {
    constructor(x,y,width,height) {
    var options={
      isStatic:true
    }
      this.body=Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
    }
  
    display() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      rotate(angle);
    fill("red");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    pop();
    }
  }
  