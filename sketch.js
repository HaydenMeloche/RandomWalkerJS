
var x;
var y;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  x = window.innerWidth/2;
  y = window.innerHeight/2;
  background(51);
}

function draw() {
  var flag = true;
  stroke(300);
  strokeWeight(1);
  //Generate random number
  var r = floor(random(4));
  switch (r) {
    case 0:
        x++;
      break;
    case 1:
        x--;
        break;
    case 2:
        y++
        break;
    case 3:
        y--;
        break;
  };
  point(x,y);
  }
