Rust -> WASM
============

Rust and WASM book: https://rustwasm.github.io/docs/book/

```
cargo generate --git https://github.com/rustwasm/wasm-pack-template

wasm-pack build

npm init wasm-app www

npm install

```

Add your pkg as a dependency and use it in index.js,

```
"dependencies": {
  "dh-wasm-jul3": "../pkg"
}
```
npm run start
