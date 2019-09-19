import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js";
import Brick from "./brick.js";
import { buildLevel, level1, level2 } from "./levels.js";

const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3,
  NEWLEVEL: 4
};

export default class Screen {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gameObjects = [];
    this.gameState = GAMESTATE.MENU;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.lives = 3
    this.bricks = [];
    this.levels = [level1, level2];
    this.currentLevel = 0;
    new InputHandler(this.paddle, this);
  }

  start() {
    if (this.gameState !== GAMESTATE.MENU &&
      this.gameState !== GAMESTATE.NEWLEVEL) {
      return;
    }
    this.bricks = buildLevel(this, this.levels[this.currentLevel]);
    this.ball.reset();
    this.gameObjects = [this.ball, this.paddle];
    this.gameState = GAMESTATE.RUNNING;
  }

  update(deltaTime) {
    if (this.lives === 0) {
      this.gameState = GAMESTATE.GAMEOVER;
    }
    if (
      this.gameState === GAMESTATE.PAUSED ||
      this.gameState === GAMESTATE.MENU ||
      this.gameState === GAMESTATE.GAMEOVER
    ) {
      return;
    }

    if(this.bricks.length === 0){
      this.gameState = GAMESTATE.NEWLEVEL;
      this.currentLevel++;
      this.start();
    }

    [...this.gameObjects, ...this.bricks].forEach(objects => {
      objects.update(deltaTime);
    });

    this.bricks = this.bricks.filter(object => !object.deletion);
  }

  draw(context) {
    [...this.gameObjects, ...this.bricks].forEach(objects => {
      objects.draw(context);
    });

    if (this.gameState === GAMESTATE.PAUSED) {
      context.fillStyle = "rgba(0,0,0,0.5)";
      context.rect(0, 0, this.gameWidth, this.gameHeight);
      context.fill();

      context.font = "30px";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("paused", this.gameWidth / 2, this.gameHeight / 2);
    }

    if (this.gameState === GAMESTATE.MENU) {
      context.fillStyle = "rgba(0,0,0,1)";
      context.rect(0, 0, this.gameWidth, this.gameHeight);
      context.fill();

      context.font = "30px";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText(
        "press space to start",
        this.gameWidth / 2,
        this.gameHeight / 2
      );
    }

    if (this.gameState === GAMESTATE.GAMEOVER) {
      context.fillStyle = "rgba(0,0,0,1)";
      context.rect(0, 0, this.gameWidth, this.gameHeight);
      context.fill();

      context.font = "30px";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText("game over", this.gameWidth / 2, this.gameHeight / 2);
    }
  }

  togglePause() {
    if (this.gameState === GAMESTATE.PAUSED) {
      this.gameState = GAMESTATE.RUNNING;
    } else {
      this.gameState = GAMESTATE.PAUSED;
    }
  }
}
