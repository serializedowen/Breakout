import { GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH } from './constants'

class Ball {
  constructor(width, height) {
    this.velocity = 5;
    // this.x = 0;
    // this.y = 0;
    // this.width = width,
    // this.height = height
  }

  draw(ctx, delta) {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
  }

}


export default Ball;