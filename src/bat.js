class Bat {
  constructor(width, height) {
    this.x = 0;
    this.y = 0;
    this.width = width,
    this.height = height
  }

  draw(ctx, mouseEvent) {


    this.x = mouseEvent.clientX - this.width / 2;
    this.y = Math.max(mouseEvent.clientY - this.height / 2, 300);
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y , this.width,this.height);
  }

}


export default Bat;