let a = 97;
let b = 12;
let c = 101;

let d = 109;
let e = 80;
let f = 106;
const DolphinsScore = (a + b + c);
const koalasscore = (d + e + f);

let DolphinsAvg = DolphinsScore / 3;
let kolasAvg = koalasscore / 3;
console.log("Dolphins Average Score is : " + DolphinsAvg);
console.log("Koalas Average Score is : " + kolasAvg);

/*
if (DolphinsAvg > kolasAvg) {
    console.log("Dolphins is the Winner of Trophy 🏆 ");
} else if (kolasAvg > DolphinsAvg) {
    console.log("Koalas is the Winner of Trophy 🏆");
} else if (DolphinsAvg === kolasAvg) {
    console.log("Match is drawn !!!!");
}
*/
// Bonus 1
if (DolphinsAvg > kolasAvg && DolphinsAvg>=100) {
    console.log("Dolphins is the Winner of Trophy 🏆 ");
} else if (kolasAvg > DolphinsAvg && kolasAvg>=100) {
    console.log("Koalas is the Winner of Trophy 🏆");
} else if (DolphinsAvg === kolasAvg && DolphinsAvg>=100 && kolasAvg>=100) {
    console.log("Match is drawn !!!!");
} else {
    console.log("Both does not qualified !!! ")
}