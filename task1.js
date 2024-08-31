// Module 17 

// task 1

var totalGivenMoney = 1000;
var orangeAndApplePrice = 300 + 400;
var output =totalGivenMoney-orangeAndApplePrice;
console.log(output);

// task 2

var math = 75.25;
var biology = 65;
var chemi = 80;
var physics = 35.45;
var bangla = 99.50;
var total = math+biology+chemi+physics+bangla;
var average = total/5;
console.log(average.toFixed(2));

// task 3

var first = 119;
var second = 5;
var modulo = first%second;
console.log (modulo);

// task 4

const a = isNaN("11");
console.log (a);
// output is false because 11 is not a number

const b = isNaN(2-10);
console.log(b);
// output is false because -8 is not a number