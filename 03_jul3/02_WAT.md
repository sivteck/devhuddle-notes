WebAssembly Text Format and WASM
================================

* S-expression based textual representation

- Shortest Possible WASM module

```
(module)
```
 
- Function declartion
```
(func (param i32) (param i32) (result f64) ... )
```

- Stack Machines
```
(func (param $p i32)
  local.get $p
  local.get $p
  i32.add)
```

- Complete example
```
(module
  (func (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add))
```

- Naming it
```
(module
  (func $add (param $lhs i32) (param $rhs i32) (result i32)
    local.get $lhs
    local.get $rhs
    i32.add)
  (export "add" (func $add))
)
```
