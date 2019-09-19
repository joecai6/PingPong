import { detectionCollision } from "./collisionDetection.js";

export default class Brick {
  constructor(screen, pos) {
    this.image = document.getElementById("brick");
    this.game = screen;
    this.pos = pos;
    this.width = 80;
    this.height = 24;

    this.deletion = false;
  }

  update() {
    if (detectionCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.deletion = true;
    }
  }

  draw(c) {
    c.drawImage(this.image, this.pos.x, this.pos.y, this.width, this.height);
  }
}
