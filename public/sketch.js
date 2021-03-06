var socket;

function setup(){
  createCanvas(1200, 800);
  background(51);
  
  socket = io.connect('/');
  socket.on('mouse', newDrawing);
  
}

function newDrawing(data) {
  noStroke();
  fill(0, 200, 0);
  ellipse(data.x, data.y, 36, 36);
}

function mouseDragged(){
  var data = {
    x: mouseX,
    y: mouseY
  }

  socket.emit('mouse', data);

  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 36, 36);
}

function draw(){

}
