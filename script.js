
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 10;
let y = 10;

setInterval(() => {
    if(pressed){
        ctx.beginPath();
        ctx.reset();
        ctx.arc(x, y, 30, 0, 2*Math.PI);
        ctx.fill();
    }
}, 16);

canvas.addEventListener('mousemove', event => {
    console.log(event);
    x = event.clientX - canvas.offsetLeft;
    y = event.clientY - canvas.offsetTop;
});
canvas.addEventListener('mousdown', event => {
   pressed = true;
});
canvas.addEventListener('mouseup', event => {
    pressed = false;
 });
 let size = document.querySelector('#size');
 let sizeValue = document.querySelector('#sizevalue')
 size.addEventListener('input', ()=> {
    sizeValue.innerHTML = size.value;
 })