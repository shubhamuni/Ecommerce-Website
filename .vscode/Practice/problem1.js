// PROBLEM NO-1
// When we work for a company building a smart home thermometer.Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude. keep in that sometimes mind there might be a sensor error"

// Here's a given data
// const temperatures = [100, -2, -1, -6, "error", 9, 13, 17, 15, 9, 5, 14];

//  1) Understand the problem.
//  - whats in the amplitude ? Answer: Difference between highest and lowest temperatures.
//  - How to compute max and min temperatures ?
//  - What's a sensor error ? And what to do ?

//  2) Breaking into sub-problems.
//  - How to ignore errors ?
//  - Find max value in temperature array.
//  - Find min value in temperature array.
//  - Subtract min from max ("amplitude") and return it.

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp != "number") continue;

    if (curTemp < min) min = curTemp;
    if (curTemp > max) max = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Codding Chellenge #1

/*
Given an array of forcasted maximm temperatures, the thewrmometer displays a string with these temperatures.

Example: [17,21,23] will print " ...17oc in 1 days ...21oc in 2 days ...23oc in 3 days ..."
- Create a function called PrintForecast which takes in an array 'arr' and logs a string like above to the console.

- Use a problem solving framework: Understand the problem and break up into sub-problems!!

TEST DATA 1 - [17,21,23]
TEST DATA 2 - [12,5,-5,0,4]
1) Understandin the problem
- Array transformed to string, seperated by ...
- What is X days Answer index + 1

2) Braking up into sub-problems
- Transform array into string
- Transform each element to string with oC
- String needs to contain day [index + 1]
- Add between elements and start and end of string
*/
const data1 = [17, 21, 23];
const data2 = [17, 21, 23];

console.log(`...${data1[0]}°C...${data1[1]}°C...${data1[2]}°C...`);

const PrintForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1}  days ... `;
  }
  console.log("..." + str);
};
PrintForecast(data1);
