// Generators

function *mooo () {
  x++
  let y = yield("some string")
  console.log(x * y)
  console.log('mememeem')
  let z = yield("some other string")
  console.log("z value", z)
  return x
}

function *mooo2 () {
  let y2 = yield("some string2")
  console.log("x", x)
  console.log(y2 * 1000)
  let z2 = yield("some other string2")
  console.log("z2 value", z2)
}

// Iterators
var something = (function () {
  var nextVal
  return {
    [Symbol.iterator]: function(){ return this },
    next: function() {
      if (nextVal === undefined)
        nextVal = 1
      else nextVal = nextVal * 3 + 6
      return nextVal
    }
  }
})()
