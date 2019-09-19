import Screen from "./screen.js";

let canvas = document.getElementById("screen");

var c = canvas.getContext("2d");

const WIDTH = 800;
const HEIGHT = 600;
c.clearRect(0, 0, WIDTH, HEIGHT);

let lastTime = 0;
let screen = new Screen(WIDTH, HEIGHT);

function gameLoop(time) {
  let deltaTime = time - lastTime;
  lastTime = time;
  c.clearRect(0, 0, WIDTH, HEIGHT);
  screen.draw(c);
  screen.update(deltaTime);
  requestAnimationFrame(gameLoop);
}

gameLoop();
