Promise.resolve().then(() => console.log('promise1 callback'));
Promise.resolve().then(() => {
console.log('promise2 callback');
process.nextTick(() => console.log('next tick inside promise2'));
});
setImmediate(() => console.log('immediate1 callback'));
setImmediate(() => console.log('immediate2 callback'));
process.nextTick(() => console.log('next tick1 callback'));
process.nextTick(() => console.log('next tick2 callback'));
setTimeout(() => console.log('set timeout'), 0);
setImmediate(() => console.log('immediate3 callback'));