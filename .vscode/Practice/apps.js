function sumNumbers(numbers){ 
    let result = 0; //1
    for (const number of numbers) {  //1
        result+=number;//4
    }
    return result; //1
}
console.log(sumNumbers([1,3,10,50])); 
// T = 1 + 1 + n + 1 = 3 + n*1
// T = n*1
// T = n=> O(n) => Linear Time Complexity