use wasm_bindgen::prelude::*;

// wasm-pack build --target web
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct World {
    width: usize,
    size: usize,
    snake: Snake,
}

struct SnakeCell(usize);

struct Snake {
    body: Vec<SnakeCell>,
}

impl Snake {
    fn new(spawn_index: usize) -> Snake {
        Snake {
            body: vec![SnakeCell(spawn_index)],
        }
    }
}

#[wasm_bindgen]
impl World {
    pub fn new() -> World {
        let width = 8;

        World {
            width,
            size: width * width,
            snake: Snake::new(10),
        }
    }

    pub fn snake_head(&self) -> usize {
        self.snake.body[0].0
    }

    pub fn update(&mut self) {
        let snake_index = self.snake_head();
        self.snake.body[0].0 = (snake_index + 1) % self.get_size();
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
