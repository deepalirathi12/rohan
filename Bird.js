class Bird {
    constructor(x, y) {
      var options = {
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image = loadImage("sprites/brid.png")
      World.add(world, this.body);
    };
    display(){
      
      var pos = this.body.position
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
     
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill('red')
     // imageMode(CENTER);
     // image(this.image, 0,0, this.width, this.height);
      imageMode(CENTER)
    image( this.image,0, 0, this.width, this.height);
      pop();
    };
  };
  