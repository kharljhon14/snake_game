use wasm_bindgen::prelude::*;

// wasm-pack build --target web

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(name);
}

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);

}
