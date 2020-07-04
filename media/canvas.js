function initiate() {
  let elem = document.getElementById('canvas');
  let canvas = elem.getContext('2d');
  let grad = canvas.createLinearGradient(0, 0, 500, 600);
      grad.addColorStop(0.1, 'yellow');
      grad.addColorStop(1, 'blue');

  canvas.save();
  canvas.fillStyle = grad;
  canvas.strokeStyle = 'green';
  
  canvas.strokeRect(100, 100, 120, 120);
  canvas.fillRect(110, 110, 100, 100);
  canvas.clearRect(120, 120, 80, 80);

  canvas.beginPath();
    canvas.moveTo(210, 110);
    canvas.lineTo(310, 210);
    canvas.lineTo(210, 210);
    canvas.fill();
  canvas.closePath();
 
  canvas.beginPath();
    canvas.arc(300, 300, 50, 0, Math.PI*2, false);
    canvas.fill();
  canvas.closePath();
 
  canvas.beginPath();
    canvas.moveTo(50, 50);
    canvas.quadraticCurveTo(100, 50, 50, 200);
    canvas.fill();

    canvas.lineWidth = 10;
    canvas.lineCap = 'round';
    canvas.lineJoin = 'miter';
    canvas.strokeStyle = 'green';
    canvas.fillStyle = 'gold';
    canvas.beginPath();
    canvas.moveTo(230, 150);
    canvas.arc(200, 150, 30, 0, Math.PI, false);
    canvas.stroke();
    canvas.lineWidth = 5;
    canvas.beginPath();
    canvas.moveTo(195, 135);
    canvas.lineTo(215, 155);
    canvas.lineTo(195, 155);
    canvas.fill();
  canvas.closePath();

  canvas.font = "bold 25px calibri, sans-serif";
  canvas.textAlign = "start";
  let text = "Hello Artyom";
  canvas.shadowColor = "rgba(0, 0, 0, 0.5)";
  canvas.shadowOffsetX = 4;
  canvas.shadowOffsetY = 4;
  canvas.shadowBlur =5;
  canvas.fillText(text, 250, 400);
  canvas.translate(50, 70);
  canvas.rotate(Math.PI/180*45);
  canvas.fillStyle = grad;
  canvas.fillText(text, 100, 100);
  // canvas.restore();

  // img
  let img = document.createElement('img');
  img.setAttribute('src', 'media/photo.jpg');
  img.addEventListener('load', function() {
    canvas.drawImage(img, 20, 20);
  })
} 


addEventListener('load', initiate);