function getMin(numbers) {
    let currentMin = numbers[0];
    for (const num of numbers) {
        if (num < currentMin) {
            currentMin = num;
        }  
    }
    return currentMin;
}
// Best case: [1, 2, 3]
// Wrost case:[3, 2, 1]
// Average case:[2, 1, 3]

console.log(getMin( [1, 2, 3]));
console.log(getMin( [9, 8, 3, 5, 1]));
console.log(getMin( [10, 2, 3, 8, 6]));

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(5));
console.log(isEven(8));