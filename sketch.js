let bird;
let pipes = [];
let bgMerc;
let button;
let startImg;
let solis;
let stars;
let stars1;
let starsRed;
let playGame = false;



function preload() {
  startImg = loadImage('assets/startscreen.png');
  bgMerc = loadImage('assets/mercurio.jpeg');
  solis = loadImage('assets/solis.png');
  stars= loadImage ('assets/stars.png')
  stars1= loadImage ('assets/stars1.png')
  starsRed= loadImage ('assets/starsRed.png')

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(startImg);
    button = createButton('PLAY');
    button.position(width/2-100, 2*height/3);
    button.size(200, 90);
    button.style("Comfortaa");
    button.style("font-size", "48px");

    bird = new Bird();
    pipes.push(new Pipe());
    
    
    
    
  }
  
  
  function draw() {
    if (playGame) {
      
      background(bgMerc);
      button.hide();
      for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();
    
        if (pipes[i].hits(bird)) {
          console.log("HIT");
        }
    
        if (pipes[i].offscreen()) {
          pipes.splice(i, 1);
        }
      }
    
      bird.update();
      bird.show();
    
      if (frameCount % 75 == 0) {
        pipes.push(new Pipe());
      }
      


    } else {
      background(startImg);
      button.show();
      button.mousePressed(Play);
    }
   
}

function Play() {
    playGame = true;
    
  }

  function keyPressed() {
    if (key == ' ') {
      bird.up();
      //console.log("SPACE");
    }
  }

