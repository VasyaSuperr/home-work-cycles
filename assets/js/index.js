console.log("==========================Cycle while==========================");
console.log("// 1");
let firstNumber11 = 25;
const lastNumber11 = 0;

while (firstNumber11 >= lastNumber11) {
  console.log("Current number: ", firstNumber11--);
}

console.log("// 2");
let firstNumber12 = 10;
const lastNumber12 = 50;

while (firstNumber12 <= lastNumber12) {
  console.log("The current number that is divisible by 5: ", firstNumber12);
  firstNumber12 += 5;
}

console.log("--------------------------------------------------------------");
firstNumber12 = 10;

while (firstNumber12 <= lastNumber12) {
  if (firstNumber12 % 5 === 0) {
    console.log("The current number that is divisible by 5: ", firstNumber12);
  }
  ++firstNumber12;
}

console.log("// 3");
let firstNumber13 = 1;
const lastNumber13 = 100;
let sum = null;

while (firstNumber13 <= lastNumber13) {
  sum += firstNumber13++;
  // console.log("Suma: ", sum);
}
console.log("Suma: ", sum);
