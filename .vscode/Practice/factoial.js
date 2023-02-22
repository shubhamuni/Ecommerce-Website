function fact(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}
console.log(fact(3));
console.log(fact(5));
console.log(fact(37));
/*
function sumprod(n) {
  let sum = 0;
  let prod = 1;
  while (n > 0) {
    const mod = n % 10;
    sum += mod;
    prod *= mod;
    n = Math.floor(n / 10);
  }
  return prod - sum;
}
console.log(sumprod(234));
*/

// function sort(arr) {
//   const resultArray = [...arr];
//   for (let outer = 0; outer < resultArray.length; outer++) {
//     let outerEl = resultArray[outer];
//     console.log("Outer Loop");

//     for (let inner = outer + 1; inner < resultArray.length; inner++) {
//       let innerEl = resultArray[inner];
//       console.log("Inner Loop");
//       if (outerEl < innerEl) {
//         resultArray[outer] = innerEl;
//         resultArray[inner] = outerEl;

//         outerEl = resultArray[outer];
//         innerEl = resultArray[inner];
//       }
//       console.log("If Loop");
//     }
//   }
//   return resultArray;
// }
// const sortedArray = sort([3, 2, 7, 1, 6, 10, -1]);
// console.log(sortedArray);

// class Stack {
//   constructor() {
//     this.top = -1;
//     this.stock = [];
//   }
//   push(ele) {
//     this.top = this.top + 1;
//     this.stock[this.top] = ele;
//   }
//   pop() {
//     this.stock.pop();
//     this.top = this.top - 1;
//   }
//   peek() {
//     return this.stock[this.top];
//   }
//   isEmpty() {
//     if (this.top == -1) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// x = new Stack();
// x.isEmpty();
// x.push(10);
// x.push(5);
// x.push(3);
// x.pop();
// console.log(x.stock);
// console.log(x.peek());
// console.log(x.isEmpty());

var validateStackSequence = function (pushed, popped) {
  let stack = [];
  let i = 0;
  for (const element of pushed) {
    stack.push(element);
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }
  return pushed.length === i;
};
console.log(validateStackSequence([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
