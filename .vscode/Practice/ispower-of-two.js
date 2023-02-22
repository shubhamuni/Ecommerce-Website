function isPowerOfTwo(numbers) {
    if (numbers < 1) {
        return false;
    }
    let dividedNumber = number;
    while (dividedNumber !==1) {
        if (dividedNumber % 2 !== 0) {
            return false;
        }
        dividedNumber = dividedNumber / 2;
    }
    return true;
}

//  Best Case Number = 13 => O(1)
// Average Case: O(log n)
// Wrost Case: 1,223,444,666,788,221 => O(log n)
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(45));
console.log(isPowerOfTwo(7894));
console.log(isPowerOfTwo(567));
console.log(isPowerOfTwo(12371));
console.log(isPowerOfTwo(43));