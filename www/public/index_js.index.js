"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunksnake_game"] = self["webpackChunksnake_game"] || []).push([["index_js"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var snake_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! snake_game */ \"./node_modules/.pnpm/file+..+pkg/node_modules/snake_game/snake_game.js\");\n\r\n\r\n(0,snake_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((_wasm) => {\r\n  (0,snake_game__WEBPACK_IMPORTED_MODULE_0__.greet)('Kharl');\r\n});\r\n\n\n//# sourceURL=webpack://snake_game/./index.js?");

/***/ }),

/***/ "./node_modules/.pnpm/file+..+pkg/node_modules/snake_game/snake_game.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/file+..+pkg/node_modules/snake_game/snake_game.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   greet: () => (/* binding */ greet),\n/* harmony export */   initSync: () => (/* binding */ initSync)\n/* harmony export */ });\nlet wasm;\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nconst cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n* @param {string} name\n*/\nfunction greet(name) {\n    const ptr0 = passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n    const len0 = WASM_VECTOR_LEN;\n    wasm.greet(ptr0, len0);\n}\n\nconst cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );\n\nif (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nasync function __wbg_load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction __wbg_get_imports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbg_alert_c44d491603c704ff = function(arg0, arg1) {\n        alert(getStringFromWasm0(arg0, arg1));\n    };\n\n    return imports;\n}\n\nfunction __wbg_init_memory(imports, maybe_memory) {\n\n}\n\nfunction __wbg_finalize_init(instance, module) {\n    wasm = instance.exports;\n    __wbg_init.__wbindgen_wasm_module = module;\n    cachedUint8Memory0 = null;\n\n\n    return wasm;\n}\n\nfunction initSync(module) {\n    if (wasm !== undefined) return wasm;\n\n    const imports = __wbg_get_imports();\n\n    __wbg_init_memory(imports);\n\n    if (!(module instanceof WebAssembly.Module)) {\n        module = new WebAssembly.Module(module);\n    }\n\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\nasync function __wbg_init(input) {\n    if (wasm !== undefined) return wasm;\n\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! snake_game_bg.wasm */ \"./node_modules/.pnpm/file+..+pkg/node_modules/snake_game/snake_game_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = __wbg_get_imports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    __wbg_init_memory(imports);\n\n    const { instance, module } = await __wbg_load(await input, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__wbg_init);\n\n\n//# sourceURL=webpack://snake_game/./node_modules/.pnpm/file+..+pkg/node_modules/snake_game/snake_game.js?");

/***/ }),

/***/ "./node_modules/.pnpm/file+..+pkg/node_modules/snake_game/snake_game_bg.wasm":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/file+..+pkg/node_modules/snake_game/snake_game_bg.wasm ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"95acf713bee4e172f016.wasm\";\n\n//# sourceURL=webpack://snake_game/./node_modules/.pnpm/file+..+pkg/node_modules/snake_game/snake_game_bg.wasm?");

/***/ })

}]);