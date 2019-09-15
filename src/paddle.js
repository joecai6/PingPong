export default class Paddle {
  constructor(screen) {
    this.gameWidth = screen.gameWidth;

    this.width = 150;
    this.height = 30;

    this.maxSpeed = 10;
    this.speed = 0;

    this.pos = {
      x: screen.gameWidth / 2 - this.width / 2,
      y: screen.gameHeight - this.height - 10
    };
  }

  draw(c) {
    c.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) {
      return;
    }
    this.pos.x += this.speed;
    if (this.pos.x < 0) {
      this.pos.x = 0;
    }
    if (this.pos.x + this.width > this.gameWidth) {
      this.pos.x = this.gameWidth - this.width;
    }
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }
}
