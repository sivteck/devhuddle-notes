// Promises
/*
 * Fulfilled
 * Rejected
 * Pending
 * Settled
 */

setTimeout(() => {
  let x = 10
  setTimeout(() => {
    let y = 20
    setTimeout(() => 
      console.log(x + y), 3000)
  }, 3000)
}, 3000)

let setTimeoutPromise = (arg, delay) => new Promise (
  (resolve, reject) => {
    setTimeout(() => resolve(arg), 3000)
  }
)
setTimeoutPromise(10, 3000).then(x => setTimeoutPromise(x+20, 3000)).then(sum => console.log(sum)).catch(console.log)

let resolveFn = (r) => console.log('resolved', r)
let rejectFn = (r) => console.log('rejected', r)
simplePromise(120).then(console.log)

let simplePromise = (x) => new Promise ( (resolve, reject) => {
    setTimeout(() => resolve(x), 3000)
})
async function simpleAsync () {
  let simpleX = simplePromise('hello')
  let simpleY = await simplePromise('sivaram')
  console.log('simplex', simpleX)
  console.log('simpley', simpleY)
  console.log('world')
  return (typeof simpleX)
}
simpleAsync().then((x) => console.log('promise object', x))

