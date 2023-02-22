// Functions used in block of codes
// Here we check how a function works..

// this 'use strict' is used for detecting errors we create in javascript.
"use strict";
/*
// Function decleration
function fruitProcessor(apple, orange) {
const juice = `Juice with ${apple} apples and ${orange} oranges.`;
return juice;
}

// Function expression
const applejuice = fruitProcessor(5,0);
console.log(applejuice);

const mixJuice = fruitProcessor(5, 5);
console.log(mixJuice);
*/
/*

// Calling function in function

function  cutFruitPieces(fruit){
    return fruit * 4;
};
function fruitJuice (apple, orange){
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);
const juice = `Juice with ${applePieces} pices of apple and ${orangePieces} pieces of orange.`
return juice;
};

console.log(fruitJuice(2,3));
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(44, 71, 23);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins>=2*avgKoalas)
//     console.log(`Dolphins wins(${avgDolphins} vs. ${avgKoalas})`);
//     else if (avgKoalas>=2*avgDolphins)
//     console.log(`Koalas wins(${avgKoalas} vs. ${avgDolphins})`);
//     else {
//         console.log('Both does not wins....');
//     }
// }
// checkWinner(scoreDolphins,scoreKoalas);

// Objects in Javascript

// const jonas = {
//     FirstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     Friends: ["jay", 'steven', 'harry', 'michael'],
//     BirthYear: 1991,
//     Job: 'teacher',
//     hasDriversLicence: false,
//     calcAge: function () {
//         return 2037 - this.BirthYear;
//     },
//     getSummary: function () {
//         return `${this.FirstName} is a ${this.calcAge()} years old.And has ${this.hasDriversLicence ? 'a' : 'no'} Driver's Licence`
//     }
// };
// console.log(jonas.calcAge());

// console.log(jonas.getSummary());

// const Mark = {
//     fullName: 'Mark Miler',
//     Mass: 78,
//     Height: 1.69,
//     calcBMI: function() {
//        this.bmi = (this.Mass/this.Height**2);
//         return this.bmi;
//     }
// };

// const John = {
//     fullName: 'John Smith',
//     Mass: 92,
//     Height: 1.95,
//     calcBMI: function() {
//         this.bmi = (this.Mass/this.Height**2);
//         return;
//     }
// };

// Mark.calcBMI();
// John.calcBMI();
// console.log(Mark.bmi, John.bmi);

// if (Mark.bmi>John.bmi) {
//     console.log(`${Mark.fullName}'s BMI is ${Mark.bmi} higher than ${John.fullName}'s BMI ${John.bmi}`);
// }
// else if (John.bmi>Mark.bmi) {
//     console.log(`${John.fullName}'s BMI is ${John.bmi} higher than ${Mark.fullName}'s BMI ${Mark.bmi}`);
// };

// Loops Chellenge
// for Loop While Loop Use cases
// Tip Calculator Using Loops

// const CalcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const total = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = CalcTip(bills[i]);
//   tips.push(tip);
//   total.push(tip + bills[i]);
// }
// console.log(bills, tips, total);

// // Calculating Average
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage(total));
// console.log(calcAverage(tips));
// console.log(calcAverage(bills));

/*class Triangle {
 calc_perimeter = ((a+b+c)/2);
 calc_area = ((a*b*c)/2);
  constructor(a, b, c) {
    this.first_side = a;
    this.second_side = b;
    this.third_side = c;
  }
}

let triangle1 = new Triangle();
triangle1.area = calc_area;
triangle1.perimeter = calc_perimeter;
console.log(triangle1.perimeter);
*/
/*
const circle = {
  redius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};
circle.draw();
*/

// calling the circle("Object") present in function "draw"

/*
Write a program that would print the information (name, year of joining, address) of three employees by creating a class named 'Employee' and inside the class there is a function print_details printing all the details of the employee .The output should be as follows (Note that you don't have to print it in the same way)

Name        Year of joining        Address

Robert            1994                64C- WallsStreat

Sam                2000                68D- WallsStreat

John                1999                26B- WallsStreat
*/
/*
class Employee {
  constructor(Name, Year_of_joining, Address) {
    this.Name = Name;
    this.Year_of_joining = Year_of_joining;
    this.Address = Address;
  }
  Print() {
    console.log(
      " Name: " +
        this.Name +
        " Year of Joining: " +
        this.Year_of_joining +
        " Adress: " +
        this.Address
    );
  }
}
let Robert, Sam, John;
Robert = new Employee("Robert", 1994, " 64C- WallsStreat");
Sam = new Employee("Sam", 2000, "68D- WallsStreat");
John = new Employee("John", 1999, "26B- WallsStreat");
console.log(Robert.Print());
console.log(Sam.Print());
console.log(John.Print());
*/

/*
class Employee {
  getInfo(salary, noOfHours) {
    let mySalary = this.AddSal(salary);
    let finalSalary = this.AddWork(mySalary, noOfHours);
    console.log(finalSalary);
  }
  AddSal(mySalary) {
    if (mySalary < 500) {
      return mySalary + 10;
    } else {
      return mySalary;
    }
  }
  AddWork(mySalary, noOfHours) {
    if (noOfHours > 6) {
      return mySalary + 5;
    } else {
      return mySalary;
    }
  }
}
let Employee1 = new Employee();
Employee1.getInfo(500, 7);
*/

// const person = function (FirstName, Lastname, BirthYear) {
//   // Instance propperties)
//   this.FirstName = FirstName;
//   this.Lastname = Lastname;
//   this.BirthYear = BirthYear;
// };
// const Shubham = new person("Shubham", "Patil", 1997);
// const Shubham = new person("Shubham", "patil", 1997);

// console.log(person.prototype);

// person.prototype.calcAge = function () {
//   console.log(2037 - this.BirthYear);
// };
// Shubham.calcAge();
// console.log(Shubham.__proto__);
// console.log(Shubham.__proto__ === person.prototype);
// person.prototype.species = "Homo sapiens";
// console.log(Shubham.species);
// console.log(Shubham.hasOwnProperty("FirstName"));
// console.log(Shubham.hasOwnProperty("species"));

// const arr = [1, 2, 4, 6, 7, 9, 6, 9];
// console.log(arr.__proto__);

// console.log(arr.__proto__ === Array.prototype);

// console.log(Shubham.__proto__.__proto__);
// console.log(Shubham.__proto__.__proto__.__proto__);
// console.log(person.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   [...new Set(this)];
// };
// console.log(arr.unique());
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }
}

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);
bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
*/
/*
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}
const shubham = new PersonCl("Shubham", 1997);
console.log(shubham);
shubham.calcAge();
shubham.greet();
*/
class count_objects {
  static i = 0;
  constructor() {
    count_objects.i = count_objects.i + 1;
  }
}
const one = new count_objects();
const two = new count_objects();
const three = new count_objects();
const four = new count_objects();
const five = new count_objects();
console.log(count_objects.i);

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};
const shubham = Object.create(PersonProto);
console.log(shubham);
shubham.name = "shubham";
shubham.birthYear = 1997;
shubham.calcAge();

class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
const bmw = new carCl("Ford", 120);
console.log(bmw.speedUS);
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.speedUS = 70;
console.log(bmw);

/*
Create a class "PARENT" with a method that prints "This is parent class" and its Child class "CHILD" with a method that prints "This is child class". Now, create an object for each of the class and call

1 - method of parent class by object of parent class

2 - method of child class by object of child class

3 - method of parent class by object of child class
*/

class PARENT {
  constructor(p_class) {
    this.p_class = p_class;
  }
  print() {
    console.log(this.p_class);
  }
}
class CHILD extends PARENT {
  constructor(x, c_class) {
    super(x);
    this.c_class = c_class;
  }
  print_p() {
    super.print();
  }
}
let a = new PARENT("this is a parent class");
a.print();
const b = new CHILD("this is a child class");
b.print_p();
a = new CHILD("this is parent class by object of child class");
a.print_p();

class Member {
  constructor(name, age, phoneNumber, address, salary) {
    this.name = name;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.salary = salary;
  }
  printSalary() {
    console.log(this.salary);
  }
}
class Employee extends Member {
  constructor(name, age, phoneNumber, address, salary, specialization) {
    super(name, age, phoneNumber, address, salary);
    this.spelization = specialization;
  }
}
class Manager extends Member {
  constructor(name, age, phoneNumber, address, salary, department) {
    super(name, age, phoneNumber, address, salary);
    this.department = department;
  }
}
const Shubham = new Employee("Shubham", 21, 888, "san Deigo", 45000, "abc");
const Vaibhav = new Manager("Vaibhav", 24, 775, "where is", 30000, "abcd");
Shubham.printSalary();
Vaibhav.printSalary();

/* Create a class named 'Shape' with a method to print "This is shape". Then create two other classes named 'Rectangle', 'Circle' inheriting the Shape class, both having a method to print "This is rectangular shape" and "This is circular shape" respectively. Create a child class 'Square' of 'rectangle' having a method to print "Square is a rectangle". Now call the method of 'Shape' and 'Rectangle' class by the object of 'Square' class. */

class Shape {
  constructor(isShape) {
    this.isShape = isShape;
  }
  printShape() {
    console.log(this.isShape);
  }
}
class Rectangle extends Shape {
  constructor(isShape, rectangle) {
    super(isShape);
    this.rectange = rectangle;
  }
  printRectangle() {
    console.log(this.rectangle);
  }
}
class Circle extends Shape {
  constructor(isShape, circle) {
    super(isShape);
    this.circle = circle;
  }
  printCircle() {
    console.log(this.circle);
  }
}
class Square extends Rectangle {
  constructor(rectangle, square) {
    super(rectangle);
    this.square = square;
  }
  printSquare() {
    console.log(this.square);
  }
}
const shap = new Shape("This is Shape");
const cir = new Circle("This is Circular Shape");
const rect = new Rectangle("This is Rectangular Shape");
const sqr = new Square("Square is a Rectangle");
shap.printShape();
sqr.printShape();
cir.printShape();
