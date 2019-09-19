import { detectionCollision } from "./collisionDetection.js";
export default class Ball {
  constructor(screen) {
    this.gameHeight = screen.gameHeight;
    this.gameWidth = screen.gameWidth;

    this.game = screen;
    this.img = document.getElementById("ball");

    this.size = 16;
    this.reset();
  }

  reset(){
    this.speed = { x: 5, y: -4 };
    this.pos = { x: 10, y: 400 };
  }

  draw(c) {
    c.drawImage(this.img, this.pos.x, this.pos.y, this.size, this.size);
  }

  update(deltaTime) {
    this.pos.x += this.speed.x;
    this.pos.y += this.speed.y;

    if (this.pos.x < 0 || this.pos.x + this.size > this.gameWidth) {
      this.speed.x = -this.speed.x;
    }
    if (this.pos.y < 0) {
      this.speed.y = -this.speed.y;
    }

    if (this.pos.y + this.size > this.gameHeight) {
      this.game.lives--;
      this.reset();
    }

    if (detectionCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.pos.y = this.game.paddle.pos.y - this.size;
    }
  }
}
