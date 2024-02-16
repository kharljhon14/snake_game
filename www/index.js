import init, { World } from 'snake_game';

init().then(() => {
  const CELL_SIZE = 20;

  const world = World.new();

  world.set_width(8);

  const worldWidth = world.get_width();

  const canvas = document.getElementById('snake_canves');
  const ctx = canvas.getContext('2d');

  canvas.height = CELL_SIZE * worldWidth;
  canvas.width = CELL_SIZE * worldWidth;

  function drawWorld() {
    ctx.beginPath();

    for (let x = 0; x < worldWidth + 1; x++) {
      ctx.moveTo(CELL_SIZE * x, 0);
      ctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE);
    }

    for (let y = 0; y < worldWidth + 1; y++) {
      ctx.moveTo(0, CELL_SIZE * y);
      ctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y);
    }

    ctx.stroke();
  }

  function drawSnake() {
    const snakeIndex = world.snake_head();
    const col = snakeIndex % worldWidth;
    const row = Math.floor(snakeIndex / worldWidth);

    ctx.beginPath();

    ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);

    ctx.stroke();
  }

  drawWorld();
  drawSnake();
});
