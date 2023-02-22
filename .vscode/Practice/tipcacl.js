// function permute(str) {
//   const result = [];
//   const dfs = (i, str) => {
//     if (i === str.length) {
//       result.push(str.slice());
//       return;
//     }
//     for (let j = i; j < str.length; j++) {
//       [str[i], str[j]] = [str[j], str[i]];
//       dfs(i + 1, str);
//       [str[i], str[j]] = [str[j], str[i]];
//     }
//   };
//   dfs(0, str);
//   return result;
// }
// console.log(permute("123"));
// function printSubsequences(arr, index, path) {
//   if (index == arr.length) {
//     if (path.length > 0) return path;
//   } else {
//     printSubsequences(arr, index + 1, path);

//     path.push(arr[index]);
//     printSubsequences(arr, index + 1, path);
//     path.pop();
//   }
//   return;
// }
// console.log(printSubsequences([1, 2, 3]));

const employes = [
  { name: "Shubham", salary: 45000 },
  { name: "Kunal", salary: 15000 },
  { name: "Pratik", salary: 25000 },
  { name: "Keshav", salary: 39000 },
  { name: "Dipak", salary: 35000 },
];
const comparator = (a, b) => {
  return a.salary - b.salary;
};
console.log(employes.sort(comparator));
