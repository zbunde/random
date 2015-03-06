function startCanvas(){
 setInterval(draw, 1000);

  var  canvas = document.getElementById('random');
      c = canvas.getContext("2d");
      SQUARE_SIZE = canvas.height / 100;
      draw();

}

function draw() {
        color = chance.color();
        x = Math.floor((Math.random() * 100) + 1);
        y = Math.floor((Math.random() * 100) + 1);
        drawTriangle(x, y, color);

}

  function drawTriangle(x, y, color){

      c.beginPath();
      c.moveTo(x,y);
      c.fillStyle = chance.color();

      c.lineTo((x + 25),(y + 25));
      c.lineTo((x + 25),(y -25));
      c.fill();
      c.stroke();
      c.closePath();

      console.log(x);
      console.log(y);

}
