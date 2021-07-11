class Particle {
    constructor(x, y, w, h, angle) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,this.r, options);
        World.add(world,this.body);
    }
    display() {
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      ellipse(0,0,this.width,this.height);
    }
};