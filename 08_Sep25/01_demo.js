// this

function outerCallSiteFunc() {
  this.a = 1000
  let b = innerCallSiteFunc()
  console.log(b.a)
  return this
}
function innerCallSiteFunc() {
  console.log(this.a)
  return this
}
outerCallSiteFunc()


function nestedFunc() {
  let a = 100
  return function innerFunc() {
    console.log(a)
  }
}
nestedFunc()()
