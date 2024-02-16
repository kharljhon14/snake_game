use wasm_bindgen::prelude::*;

// wasm-pack build --target web
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(PartialEq)]
enum Direction {
    Up,
    Right,
    Left,
    Down,
}

#[wasm_bindgen]
pub struct World {
    width: usize,
    size: usize,
    snake: Snake,
}

struct SnakeCell(usize);

struct Snake {
    body: Vec<SnakeCell>,
    direction: Direction,
}

impl Snake {
    fn new(spawn_index: usize) -> Snake {
        Snake {
            body: vec![SnakeCell(spawn_index)],
            direction: Direction::Right,
        }
    }
}

#[wasm_bindgen]
impl World {
    pub fn new(width: usize, spawn_point: usize) -> World {
        World {
            width,
            size: width * width,
            snake: Snake::new(spawn_point),
        }
    }

    pub fn snake_head(&self) -> usize {
        self.snake.body[0].0
    }

    pub fn set_snake_spawn(&mut self, spawn_postion: usize) {
        self.snake.body = vec![SnakeCell(spawn_postion)];
    }

    pub fn update(&mut self) {
        let snake_index = self.snake_head();
        let row = snake_index / self.width;

        if Direction::Up == self.snake.direction {
            self.snake.body[1].0 = (snake_index + 1) % self.size;
        } else if Direction::Down == self.snake.direction {
            self.snake.body[1].0 = (snake_index - 1) % self.size;
        } else if Direction::Left == self.snake.direction {
            let next_col = (snake_index - 1) % self.width;
            self.snake.body[0].0 = (row * self.width) + next_col;
        } else if Direction::Right == self.snake.direction {
            let next_col = (snake_index + 1) % self.width;
            self.snake.body[0].0 = (row * self.width) + next_col;
        }
    }

    pub fn set_width(&mut self, new_width: usize) {
        self.width = new_width;
    }

    pub fn get_width(&self) -> usize {
        self.width
    }

    pub fn get_size(&self) -> usize {
        self.size
    }
}
