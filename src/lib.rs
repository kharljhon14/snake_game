use wasm_bindgen::prelude::*;

// wasm-pack build --target web

#[wasm_bindgen]
pub struct World {
    width: usize,
}

#[wasm_bindgen]
impl World {
    pub fn new() -> World {
        World { width: 8 }
    }

    pub fn get_width(&self) -> usize {
        self.width
    }
}
