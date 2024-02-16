use wasm_bindgen::prelude::*;

// wasm-pack build --target web

#[wasm_bindgen]
pub fn greet(name: &str) {
    println!("Hello {name}");
}
