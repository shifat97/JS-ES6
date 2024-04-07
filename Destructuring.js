const [counter, setCounter] = [10, 20];

console.log(setCounter);

let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(`${x}, ${y}`);