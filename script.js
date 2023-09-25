
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';
ctx.fillRect(10, 1, 100, 30);

ctx.fillStyle = 'black';
ctx.fillRect(10, 30, 100, 30);

ctx.rect(10, 0, 100, 90);
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.stroke();

ctx.moveTo(150,20);
ctx.lineTo(140,50);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(150,20);
ctx.lineTo(160,50);
ctx.stroke();
ctx.beginPath();

ctx.moveTo(130,30);
ctx.lineTo(160,50);
ctx.stroke();
ctx.beginPath(); 

ctx.moveTo(140,50);
ctx.lineTo(170,30);
ctx.stroke();
ctx.beginPath(); 

ctx.moveTo(130,30);
ctx.lineTo(170,30);
ctx.stroke();
ctx.beginPath(); 

ctx.moveTo(0,0);
ctx.stroke();
ctx.beginPath();
ctx.arc(200,100, 50, 0, 2 * Math.PI);
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.stroke();

ctx.beginPath();
ctx.lineTo(200,100);
ctx.arc(200, 100, 50, 30, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();
