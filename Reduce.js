var numbers = [1, 2, 3, 4, 5, 6];

var sum = numbers.reduce((prev, current) => {
    return prev + current;
}, 0);

console.log(sum);