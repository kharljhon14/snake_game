import init, { World } from 'snake_game';

init().then(() => {
  const world = World.new();

  const canvas = document.getElementById('snake_canves');
  const ctx = canvas.getContext('2d');

  console.log(ctx);
});
