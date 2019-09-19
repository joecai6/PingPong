export function detectionCollision(ball, object) {
  let botBall = ball.pos.y + ball.size;
  let topBall = ball.pos.y;

  let topObject = object.pos.y;
  let leftObject = object.pos.x;
  let rightObject = object.pos.x + object.width;
  let botObject = object.pos.y + object.height;

  if (
    botBall >= topObject &&
    topBall <= botObject &&
    ball.pos.x >= leftObject &&
    ball.pos.x + ball.size <= rightObject
  ) {
    return true;
  } else {
    return false;
  }
}
