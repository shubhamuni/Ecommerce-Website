/*
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  get_info() {
    const map = new Map();
    map.set(this.salary, this.name);
    for (let [key, value] of map) {
      for (let key of map.keys()) {
      }
      for (var i = 0; i < key.length - 1; i++) {
        var flag = 0;
        console.log("Passing" + i+1);
        for (var j = 0; j < key.length - 1 - i; j++) {
          if (key[j] < key[j + 1]) {
            var temp1 = key[j];
            key[j] = key[j + 1];
            key[j + 1] = temp1;
            flag += 1;
            var temp2 = value[j];
            value[j] = value[j + 1];
            value[j + 1] = temp2;
          }
        }
      } if(flag){
        return;
      }
      console.log(key, value);
    }
  }
}
var details = new Employee(
  ["Vaibhav", "yash", "Rahul", "shubham", "Rajesh"],
  [7000, 4500, 3500, 2800, 1900]
);
details.get_info();
*/

// Return Prime number
/* function getMin(numbers) {
  let currMin = numbers[0];
  let count = 0;
  for (const num of numbers) {
    count++;
    if (num < currMin) {
      currMin = num;
    }
  }
  console.log("count is:-" + " " + count);
  return currMin;
}
console.log(getMin([1, 4, 3, 2, 12]));
console.log(getMin([8, 4, 6, 2, 145, 0]));
console.log(getMin([5, 4, 8, 21, -1]));
*/

// To checking is number power of two

/*
function isPowerofTwo(number) {
  if (number < 1) return false;
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    console.log("executing....");
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber = dividedNumber / 2;
  }
  return true;
}
*/

// To checking is number power of two By another way(using bitwise operator)

// function isPowerofTwo(number) {
//   if (number < 1) {
//     return false;
//   }
//   return (number & (number - 1)) === 0;
// }
// console.log(isPowerofTwo(8));
// console.log(isPowerofTwo(5));
// console.log(isPowerofTwo(10));
// console.log(isPowerofTwo(16));
/*
function fact(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) result = result * i;
  return result;
}
console.log(fact(2));
console.log(fact(3));
console.log(fact(5));
console.log(fact(4));
*/
/*
function fact(number) {
  return (number = number * (number - 1));
  return number;
  number--;
}
console.log(fact(2));
console.log(fact(3));
console.log(fact(5));
console.log(fact(4));
*/
/*
function fact(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
}
console.log(fact(41));
console.log(fact(3));
console.log(fact(5));
console.log(fact(4));
*/
var removeElements = function (head, val) {
  var temp = new ListNode(0);
  temp.next = head;
  var curr = temp;
  while (curr.next != null) {
    if (curr.next.val == val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return temp.next;
};
