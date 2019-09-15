export default class Ball {
  constructor(screen) {
    this.gameHeight = screen.gameHeight;
    this.gameWidth = screen.gameWidth;

    this.game = screen;
    this.img = document.getElementById("ball");
    this.speed = { x: 7, y: 7 };
    this.pos = { x: 10, y: 10 };
    this.size = 16;
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
    if (this.pos.y < 0 || this.pos.y + this.size > this.gameHeight) {
      this.speed.y = -this.speed.y;
    }

    let botBall = this.pos.y + this.size;
    let topPaddle = this.game.paddle.pos.y;
    let leftPaddle = this.game.paddle.pos.x;
    let rightPaddle = leftPaddle + this.game.paddle.width;

    if (
      botBall >= topPaddle &&
      this.pos.x >= leftPaddle &&
      this.pos.x + this.size <= rightPaddle
    ) {
      this.speed.y = -this.speed.y;
      this.pos.y = topPaddle - this.size;
    }
  }
}
