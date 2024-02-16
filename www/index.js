import init, { World } from 'snake_game';

init().then(() => {
  const world = World.new();

  console.log(world.get_width());
});
