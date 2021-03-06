function background(){

var canvas = document.getElementById("starwarsr2d2"),
  context = canvas.getContext("2d"),
  stars = 200; //number of stars//
var x = 600,
  y = 100,
  // Radii of the white glow.
  innerRadius = 5,
  outerRadius = 70,
  // Radius of the entire circle.
  radius = 60;

//Background colour new added by Charlotte
  context.fillStyle = "#111";
  context.fillRect(0, 0, 750, 500);

//Moon
var gradient = context.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
gradient.addColorStop(0, 'white');
gradient.addColorStop(1, 'grey');

context.arc(x, y, radius, 0, 2 * Math.PI);
context.fillStyle = gradient;
context.fill();

//Background by Chris
for (var i = 0; i < stars; i++) {
  x = Math.random() * canvas.offsetWidth;
  y = Math.random() * canvas.offsetHeight;
  context.fillStyle = "white";
  context.fillRect(x, y, 1, 1);
}

}

function r2d2(){

  let c = document.getElementById("canvas");
  console.log(c);
  let ctx = c.getContext("2d");
  console.log(ctx);


  //Functions

  //Blue Squares
  function BlueS(a,b,c,d){
    ctx.fillStyle = "blue";
    ctx.fillRect(a, b, c, d);
  };

  //Black Squares
  function BlackS(a,b,c,d){
    ctx.fillStyle = "black";
    ctx.fillRect(a, b, c, d);
  };

  //Grey Squares
  function GreyS(a,b,c,d){
    ctx.fillStyle = "grey";
    ctx.fillRect(a, b, c, d);
  };

//White Body
function WhiteB(a,b,c,d){
  ctx.fillStyle = "white";
  ctx.fillRect(a, b, c, d);
}

//New white body by Charlotte

WhiteB(20, 90, 180, 30);
WhiteB(20, 120, 180, 100);
WhiteB(10, 220, 30, 20);
WhiteB(180, 220, 30, 20);
WhiteB(80, 220, 60, 20);


  //Max outline

  //head outline
  ctx.beginPath();
  ctx.moveTo(90, 0);
  ctx.lineTo(90, 10);
  ctx.lineTo(70, 10);
  ctx.lineTo(70, 20);
  ctx.lineTo(60, 20);
  ctx.lineTo(60, 30);
  ctx.lineTo(50, 30);
  ctx.lineTo(50, 50);
  ctx.lineTo(40, 50);
  ctx.lineTo(40, 90);
  ctx.lineTo(180, 90);
  ctx.lineTo(180, 50);
  ctx.lineTo(170, 50);
  ctx.lineTo(170, 30);
  ctx.lineTo(160, 30);
  ctx.lineTo(160, 20);
  ctx.lineTo(150, 20);
  ctx.lineTo(150, 10);
  ctx.lineTo(130, 10);
  ctx.lineTo(130, 0);
  ctx.lineTo(90, 0);
  ctx.fillStyle = "grey";
  ctx.fill();
  ctx.stroke();

  //head outline with black

  ctx.beginPath();
  ctx.moveTo(90, 10);
  ctx.lineTo(90, 20);
  ctx.lineTo(70, 20);
  ctx.lineTo(70, 10);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(70, 20);
  ctx.lineTo(70, 30);
  ctx.lineTo(60, 30);
  ctx.lineTo(60, 20);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(60, 30);
  ctx.lineTo(60, 50);
  ctx.lineTo(50, 50);
  ctx.lineTo(50, 30);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(60, 40);
  ctx.lineTo(60, 50);
  ctx.lineTo(50, 50);
  ctx.lineTo(50, 50);
  ctx.lineTo(50, 80);
  ctx.lineTo(40, 80);
  ctx.lineTo(40, 50);
  ctx.lineTo(50, 50);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();


  BlackS(40, 80, 140, 10)

  ctx.beginPath();
  ctx.moveTo(180, 80);
  ctx.lineTo(170, 80);
  ctx.lineTo(170, 50);
  ctx.lineTo(180, 50);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(170, 50);
  ctx.lineTo(160, 50);
  ctx.lineTo(160, 30);
  ctx.lineTo(170, 30);
  ctx.fillStyle = "black";
  ctx.fill();

  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(170, 30);
  ctx.lineTo(160, 30);
  ctx.lineTo(150, 30);
  ctx.lineTo(150, 20);
  ctx.lineTo(160, 20);
  ctx.lineTo(160, 30)
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.lineTo(150, 30);
  ctx.lineTo(150, 20);
  ctx.lineTo(130, 20);
  ctx.lineTo(130, 10);
  ctx.lineTo(150, 10);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();


  ctx.beginPath();
  ctx.moveTo(130, 10);
  ctx.lineTo(90, 10);
  ctx.lineTo(90, 0);
  ctx.lineTo(130, 0);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();


  //body outline
  BlackS(40, 90, 10, 220)
  BlackS(50, 210, 120, 10)
  BlackS(170, 90, 10, 220)

  // upper left leg
  BlackS(20, 90, 20, 10)
  BlackS(10, 100, 10, 20)
  BlackS(10, 120, 30, 10)

  //middle left leg
  BlackS(20, 120, 10, 70)
  BlackS(20, 190, 20, 10)

  //left foot
  BlackS(10, 200, 10, 20)
  BlackS(0, 220, 10, 30)
  BlackS(10, 240, 30, 10)

  //upper right leg
  BlackS(180, 90, 20, 10)
  BlackS(200, 100, 10, 20)
  BlackS(180, 120, 30, 10)

  //middle right leg
  BlackS(190, 120, 10, 70)
  BlackS(180, 190, 20, 10)

  //right foot
  BlackS(200, 200, 10, 20)
  BlackS(210, 220, 10, 30)
  BlackS(180, 240, 30, 10)

  //middle foot
  BlackS(70, 230, 10, 20)
  BlackS(140, 230, 10, 20)
  BlackS(80, 240, 60, 10)
  BlackS(80, 220, 10, 10)
  BlackS(130, 220, 10, 10)



  //Charlotte's Body detail

  //Head Details

  //Eye Blue Outline
  BlueS(100, 10, 10, 10);
  BlueS(110, 10, 10, 10);
  BlueS(90, 20, 10, 10);
  BlueS(120, 20, 10, 10);
  BlueS(120, 30, 10, 10);
  BlueS(120, 40, 10, 10);
  BlueS(110, 40, 10, 10);
  BlueS(100, 40, 10, 10);
  BlueS(90, 40, 10, 10);
  BlueS(90, 30, 10, 10);

  //Eye itself

  BlackS(100, 30, 10, 10);
  BlackS(110, 30, 10, 10);
  BlackS(110, 20, 10, 10);


  //Rest of detail on Head

  BlueS(70, 20, 10, 10);
  BlueS(60, 30, 10, 10);
  BlueS(140, 20, 10, 10);
  BlueS(150, 30, 10, 10);
  BlueS(70, 50, 10, 10);
  BlueS(60, 50, 10, 10);
  BlueS(70, 70, 10, 10);
  BlueS(60, 70, 10, 10);
  BlueS(90, 70, 10, 10);
  BlueS(90, 60, 10, 10);
  BlueS(110, 70, 10, 10);
  BlueS(110, 60, 10, 10);
  BlueS(120, 60, 10, 10);
  BlueS(130, 60, 10, 10);
  BlueS(130, 70, 10, 10);
  BlueS(150, 70, 10, 10);
  BlueS(150, 60, 10, 10);

  ctx.fillStyle = "red";
  ctx.fillRect(120, 70, 10, 10)

  ctx.fillStyle = "white";
  ctx.fillRect(100, 20, 10, 10)

  //Legs

  //L
  GreyS(30, 200, 10, 10);
  GreyS(30, 210, 10, 10);
  //R
  GreyS(180, 200, 10, 10);
  GreyS(180, 210, 10, 10);
  //M
  GreyS(110, 220, 10, 10);
  GreyS(100, 220, 10, 10);
  GreyS(120, 230, 10, 10);
  GreyS(90, 230, 10, 10);

  //Body Details

  //Left Panel

  GreyS(50, 100, 10, 80);
  GreyS(70, 100, 10, 110);
  GreyS(60, 100, 10, 10);
  GreyS(60, 170, 10, 10);

  //Right Panel

  GreyS(140, 100, 10, 110);
  GreyS(160, 100, 10, 80);
  GreyS(150, 100, 10, 10);
  GreyS(150, 170, 10, 10);

  //Middle Panel

  BlueS(90, 100, 40, 10);
  BlueS(90, 120, 40, 10);
  BlueS(90, 140, 10, 20);
  BlueS(120, 140, 10, 20);
  GreyS(100, 140, 20, 20);
  BlueS(90, 170, 40, 40);
  GreyS(100, 180, 10, 10);
  GreyS(110, 190, 10, 10);
  BlackS(100, 190, 10, 10);
  BlackS(110, 180, 10, 10);

  //Colour Key (Will be removed later)
  //Blue squares
  //ctx.fillStyle = "blue";
  //ctx.fillRect(10, 10, 10, 10);

  //Grey Squares
  //ctx.fillStyle = "grey";
  //ctx.fillRect(10, 20, 10, 10)

  //Black squares

  //ctx.fillStyle = "black";
  //ctx.fillRect(10, 30, 10, 10)

  //Red square

  //ctx.fillStyle = "red";
  //ctx.fillRect(10, 40, 10, 10)

  //White square

  //ctx.fillStyle = "white";
  //ctx.fillRect(10, 50, 10, 10)



}
