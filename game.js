import Paddle from './paddle.js';
let canvas = document.getElementById("screen");

let c = canvas.getContext('2d');

const WIDTH = 800;
const HEIGHT = 600;
c.clearRect(0, 0, WIDTH, HEIGHT);

let paddle = new Paddle(WIDTH, HEIGHT);

c.fillStyle = '#f00';
c.fillRect(20, 20, 100, 100);

c.fillStyle = '#00f';
c.fillRect(200, 320, 100, 100);