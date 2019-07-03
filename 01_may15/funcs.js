// Functions in JS are treated the same way as objects
// Can be applied to variables, array values, object values
// Can be past as arguments to other functions
// Can be returned from functions

// Allows for the creation of higher order functions
// Higher Order Functions either takes one or more functions as arguments or returns a function
// map(), filter(), reduce()

// Closures
//  Functions that refer to variables declared by parent function
//  Possible because of lexical scoping
//

// Immediately invoked function expression
//  A function that gets invoked immediately
//  Creates closure
//  Doesn't add to or modify global object
//
//
//

function parentFunc() {
  var arrF = []
  for (var i = 0; i < 10; i++) {
    arrF.push(
      function (i) 
    )
  }

  console.log(i)
  return arrF
}
