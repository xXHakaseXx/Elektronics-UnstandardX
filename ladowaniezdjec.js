// var canvas = document.getElementById('stol'),
//     ctx = canvas.getContext('2d'),
//     x = 0,
//     last = performance.now();

// function draw(timestamp) {
//   requestAnimationFrame(draw);
  
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.beginPath();
//   ctx.rect(x, 20, 20, 20);
//   ctx.fillStyle = "#ffffff";
//   ctx.fill();
  
//   x += (timestamp - last) / 10;
//   last = timestamp;
// }
// requestAnimationFrame(draw);