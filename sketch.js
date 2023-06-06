let bg;
let button;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('assets/startscreen.png');

    background(0);
  button = createButton('PLAY');
  button.position(650, 450);
  button.mousePressed(changeBG);
  button.size(200, 90);
  button.style("Comfortaa");
  button.style("font-size", "48px");
  }
  
  
  function draw() {
    background(bg);
}

function changeBG() {
    bg = loadImage('assets/mercurio.jpeg');
    background(bg);
    button.hide();
  }