import init, { World, Direction } from 'snake_game';

init().then((wasm) => {
  const CELL_SIZE = 20;
  const WORLD_WIDTH = 16;

  const SPAWN_CELL = Date.now() % (WORLD_WIDTH * WORLD_WIDTH);

  const world = World.new(WORLD_WIDTH, SPAWN_CELL);

  const worldWidth = world.get_width();

  const canvas = <HTMLCanvasElement>document.getElementById('snake_canves');
  const ctx = canvas.getContext('2d');

  canvas.height = CELL_SIZE * worldWidth;
  canvas.width = CELL_SIZE * worldWidth;

  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowUp':
        world.change_snake_dir(Direction.Up);
        break;
      case 'ArrowDown':
        world.change_snake_dir(Direction.Down);
        break;
      case 'ArrowRight':
        world.change_snake_dir(Direction.Right);
        break;
      case 'ArrowLeft':
        world.change_snake_dir(Direction.Left);
        break;
    }
  });

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
    const snakeCells = new Uint32Array(
      wasm.memory.buffer,
      world.snake_cells(),
      world.snake_length()
    );

    snakeCells.forEach((cellIdx) => {
      const col = cellIdx % worldWidth;
      const row = Math.floor(cellIdx / worldWidth);

      ctx.beginPath();

      ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    });

    ctx.stroke();
  }

  function paint() {
    drawWorld();
    drawSnake();
  }

  function update() {
    const fps = 10;

    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      paint();
      world.update();
      requestAnimationFrame(update);
    }, 1000 / fps);
  }

  paint();
  update();
});
