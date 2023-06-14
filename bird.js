// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Bird() {
  this.y = height/2;
  this.x = width/3;

  this.gravity = 0.6;
  this.lift = -12;
  this.velocity = 5;

  this.show = function() {
   
    image(solis, this.x, this.y, height/8, height/8);
  }

  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity*0.9;
    this.y += this.velocity;

    if (this.y > windowHeight) {
      this.y = windowHeight;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}
