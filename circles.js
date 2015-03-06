function startCircles(){

 setInterval(draw, 120);

  var  canvas = document.getElementById('circles');

      c = canvas.getContext("2d");

      LOCATION = 10
      SQUARE_SIZE = canvas.width/10 ;
      draw();
}

function draw() {
    for(var i = 0; i < 15; i++)



  if (i % 2=== 0)
    {
      color = chance.color();
      x = Math.floor((Math.random() * 12) + 1);
      y = Math.floor((Math.random() * 11) + 1);
      r = Math.floor((Math.random() * 123) + 100);
      c.globalAlpha = i/10;
      drawCircle(x, y, color,r);

    }
    else
    {
    color = chance.color();
    x = Math.floor((Math.random() * 13) + 1);
    y = Math.floor((Math.random() * 11) + 1);
    r = Math.floor((Math.random() * 243) + 10);
///    c.globalAlpha = i/10;
    drawCircle(x, y, color,r);
  }

}



function drawCircle(x,y, color,r){
    c.beginPath();
    c.arc((x * SQUARE_SIZE), (y * SQUARE_SIZE), r, 0, 2 * Math.PI, false);
    c.fillStyle = color;
    c.fill();
    c.stroke();
    c.closePath();
}
