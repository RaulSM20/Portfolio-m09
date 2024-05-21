const canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');


let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

canvas.width = windowWidth;
canvas.height = windowHeight;

canvas.style.background = '#ff8'


context.fillRect(200, 0, 100, 100);

context.fillStyle = 'red';

context.fillRect(100,500,100,200)

context.beginPath();
context.strokeStyle = 'blue';
context.lineWidth = 5;
context.arc(100, 100, 50, 0, Math.PI * 2, false);
context.stroke();
context.closePath();