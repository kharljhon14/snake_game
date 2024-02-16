import init, { greet } from 'snake_game';

init().then((_wasm) => {
  greet('Kharl');
});
