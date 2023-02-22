function fib(n) {
    const numbers = [1,1];
    for (let i = w; i < n + 1; i++) {
        numbers.push(numbers[i-2] + numbers[i-1]);
    }
    // It returns the array of that index
    console.log(numbers)
    return numbers[n];
}
console.log(fib(6));
// It returns the number present in that index.