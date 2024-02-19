use wasm_bindgen::prelude::*;

// wasm-pack build --target web
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[derive(PartialEq)]
pub enum Direction {
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

pub struct SnakeCell(usize);

struct Snake {
    body: Vec<SnakeCell>,
    direction: Direction,
}

impl Snake {
    fn new(spawn_index: usize, size: usize) -> Snake {
        let mut body = vec![];

        for _i in 0..size {
            body.push(SnakeCell(spawn_index - 1))
        }

        Snake {
            body,
            direction: Direction::Up,
        }
    }
}

#[wasm_bindgen]
impl World {
    pub fn new(width: usize, spawn_point: usize) -> World {
        World {
            width,
            size: width * width,
            snake: Snake::new(spawn_point, 1),
        }
    }

    pub fn snake_head(&self) -> usize {
        self.snake.body[0].0
    }

    pub fn set_snake_spawn(&mut self, spawn_postion: usize) {
        self.snake.body = vec![SnakeCell(spawn_postion)];
    }

    pub fn change_snake_dir(&mut self, direction: Direction) {
        self.snake.direction = direction;
    }

    pub fn snake_length(&self) -> usize {
        self.snake.body.len()
    }

    // *const is raw pointer
    pub fn snake_cells(&self) -> *const SnakeCell {
        // A pointer to the memory
        self.snake.body.as_ptr()
    }

    pub fn update(&mut self) {
        let snake_index = self.snake_head();
        let (row, col) = self.index_to_cell(snake_index);

        let (row, col) = match self.snake.direction {
            Direction::Up => ((row - 1) % self.width, col),
            Direction::Down => ((row + 1) % self.width, col),
            Direction::Right => (row, (col + 1) % self.width),
            Direction::Left => (row, (col - 1) % self.width),
        };

        let next_index = self.cell_to_index(row, col);
        self.set_snake_head(next_index);
    }

    fn set_snake_head(&mut self, index: usize) {
        self.snake.body[0].0 = index;
    }

    fn index_to_cell(&self, index: usize) -> (usize, usize) {
        (index / self.width, index % self.width)
    }

    fn cell_to_index(&self, row: usize, col: usize) -> usize {
        (row * self.width) + col
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
