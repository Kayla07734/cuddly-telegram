class myFan {
  constructor(x, y, w, h, color,angle) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color=color
    this.angle=angle

    var options = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
    World.add(world, this.body);
  }

  Show() {
    push();
    fill(this.color);
    rectMode(CENTER);
    translate(this.body.position.x, this.body.position.y);
    rotate(this.angle);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
