class myBall {
    constructor(x, y, r, color) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.color=color
  
      var options = {
        isStatic: false,restitution: 0.95, frictionAir: 0.01
      };
  
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      World.add(world, this.body);
    }
  
    Show() {
      push();
      fill(this.color);
      ellipseMode(RADIUS);
      translate(this.body.position.x, this.body.position.y);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }
  