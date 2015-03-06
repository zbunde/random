function startWords(){
 setInterval(draw, 1000);
  var  canvas = document.getElementById('circles');
      c = canvas.getContext("2d");
      SQUARE_SIZE = canvas.height / 100;
      draw();
}

function draw() {
    for(var i = 0; i < 10; i++)
    {
      color = chance.color();
      x = Math.floor((Math.random() * 100) + 1);
      y = Math.floor((Math.random() * 100) + 1);
      r = Math.floor((Math.random() * 100) + 1);
      drawCircle(x, y, color, r);

    }
}

function drawCircle(rowCount,blockCount, color, r){
    c.beginPath();
    c.arc(rowCount * SQUARE_SIZE, blockCount * SQUARE_SIZE, 10, 0, 2 * Math.PI, false);
    c.fillStyle =  chance.color();
    c.fill();
    c.stroke();
    c.closePath();
}
