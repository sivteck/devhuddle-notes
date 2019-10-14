let x = 100
function *genFunc () {
  x++;
  console.log('start yielding')
  let y = yield "hella"
  console.log('finished yielding')
  return x * y
}

let it = genFunc()

let iterableObj = () => {
  let value = 0
  return {
    someObj: {
    [Symbol.iterator]: function () { return this },
    next: () => {
      value = value * 3 + 20
      if (value < 1000) return { value: value, done: false }
      return { done: true }
      }
    }
  }
}

let obj
