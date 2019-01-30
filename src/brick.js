class Brick {
  constructor({ x0, y0, x1, y1 }) {
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.score = Math.ceil((Math.random() * 5))
  }

  draw(ctx) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x0, this.y0, this.x1, this.y1);
  }

  collide(x, y) {
    return this.x0 < x < this.x1 && this.y0 < y < this.y1;
  }
}


export default Brick;