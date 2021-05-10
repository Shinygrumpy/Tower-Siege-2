class Box {
  constructor(x,y,width,height) {
    var options = {
        restitution:0.4,
        friction:0.25,
        isStatic:false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
      
    }
    else{
      tint(255, 126);
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5
      pop();
    
    }

  }

  score(){
    if(this.visibility < 0 && this.visibility > -105){
      score++
    }

  }

};