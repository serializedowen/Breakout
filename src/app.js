import { fromEvent, interval, merge } from 'rxjs';
import {
  map,
  mapTo,
  flatMap,
  startWith,
  take,
  scan,
  tap,
  withLatestFrom
} from 'rxjs/operators';
import brick from './brick';
import animationFrame from 'rxjs/scheduler/animationFrame';
import Bat from './bat';
import Ball from './ball';
import Mo from './balll';
import { GAMEBOARD_HEIGHT, GAMEBOARD_WIDTH } from './constants';

const TICK = Math.ceil(1000 / 60);

// const canvas = document.createElement('canvas');
// document.insertBefore()

const canvas = document.querySelector('canvas');

canvas.width = GAMEBOARD_WIDTH;
canvas.height = GAMEBOARD_HEIGHT;

const mouseMove$ = fromEvent(canvas, 'mousemove');
const ctx = canvas.getContext('2d');

const clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

const interval$ = interval(TICK, animationFrame).pipe(
  map(() => ({
    now: Date.now()
  })),
  scan((prev, curr) => ({ ...curr, delta: curr.now - prev.now }))
);

const bat = new Bat(40, 10);
const ball = new Ball();

const gameLoop = ([{ curr, delta }, mouseEvent]) => {
  clearCanvas();
  // ball.draw(ctx);
  ball.draw(ctx, delta);
  bat.draw(ctx, mouseEvent);
  new brick({ x0: 1, x1: 20, y0: 3, y1: 40 }).draw(ctx);
};

function spritesFactory() {
  const sprites = {
    ball: new Ball(),
    bat: new Bat(40, 10),
    brick: []
  };

  const sprites$ = mouseMove$.pipe(mapTo(sprites),
    
  );

  const sprites1$ = interval$.pipe(mapTo(sprites));

  return merge(sprites$, sprites1$);
}

const a = spritesFactory();
a.subscribe(console.log);

interval$.pipe(withLatestFrom(mouseMove$)).subscribe(gameLoop);
