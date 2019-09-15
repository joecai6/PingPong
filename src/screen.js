import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";

export default class Screen {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  start() {
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);

    this.gameObjects = [this.ball, this.paddle];
    new InputHandler(this.paddle);
  }

  update(deltaTime) {
    this.gameObjects.forEach(objects => {
      objects.update(deltaTime);
    });
  }

  draw(context) {
    this.gameObjects.forEach(objects => {
      objects.draw(context);
    });
  }
}
