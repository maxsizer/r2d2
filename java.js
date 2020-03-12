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

var gradient = context.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
gradient.addColorStop(0, 'white');
gradient.addColorStop(1, 'grey');

context.arc(x, y, radius, 0, 2 * Math.PI);
context.fillStyle = gradient;
context.fill();

for (var i = 0; i < stars; i++) {
  x = Math.random() * canvas.offsetWidth;
  y = Math.random() * canvas.offsetHeight;
  context.fillStyle = "white";
  context.fillRect(x, y, 1, 1);
}

}
