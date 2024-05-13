// console.log("==========================Cycle while==========================");
// console.log("// 1");
// let firstNumber1 = 25;
// const lastNumber1 = 0;

// while (firstNumber1 >= lastNumber1) {
//   console.log("Current number: ", firstNumber1--);
// }

// console.log("// 2");
// let firstNumber2 = 10;
// const lastNumber2 = 50;

// while (firstNumber2 <= lastNumber2) {
//   console.log("The current number that is divisible by 5: ", firstNumber2);
//   firstNumber2 += 5;
// }

// console.log("--------------------------------------------------------------");
// firstNumber2 = 10;

// while (firstNumber2 <= lastNumber2) {
//   if (firstNumber2 % 5 === 0) {
//     console.log("The current number that is divisible by 5: ", firstNumber2);
//   }
//   ++firstNumber2;
// }

// console.log("// 3");
// let firstNumber3 = 1;
// const lastNumber3 = 100;
// let sum = null;

// while (firstNumber3 <= lastNumber3) {
//   sum += firstNumber3++;
//   // console.log("Suma: ", sum);
// }
// console.log("Suma: ", sum);

// console.log("=======================Cycle do...while=======================");
// console.log("// 1");
// firstNumber1 = 25;

// do {
//   console.log("Current number: ", firstNumber1--);
// } while (firstNumber1 >= lastNumber1);

// console.log("// 2");
// firstNumber2 = 10;

// do {
//   if (firstNumber2 % 5 === 0) {
//     console.log("The current number that is divisible by 5: ", firstNumber2);
//   }
//   ++firstNumber2;
// } while (firstNumber2 <= lastNumber2);

// console.log("// 3");
// firstNumber3 = 1;
// sum = null;

// do {
//   sum += firstNumber3++;
// } while (firstNumber3 <= lastNumber3);
// console.log("Suma: ", sum);

// console.log("==========================Cycle for===========================");
// console.log("// 1");
// firstNumber1 = 25;

// for (firstNumber1; firstNumber1 >= lastNumber1; firstNumber1--) {
//   console.log("Current number: ", firstNumber1);
// }

// console.log("// 2");
// firstNumber2 = 10;

// for (firstNumber2; firstNumber2 <= lastNumber2; firstNumber2++) {
//   if (firstNumber2 % 5 === 0) {
//     console.log("The current number that is divisible by 5: ", firstNumber2);
//   }
// }

// console.log("// 3");
// firstNumber3 = 1;
// sum = null;

// for (firstNumber3; firstNumber3 <= lastNumber3; firstNumber3++) {
//   sum += firstNumber3;
// }
// console.log("Suma: ", sum);

// console.log("==============================================================");
// console.log("Additional task from chat GPT");
// console.log("// 1");
// console.log(
//   "Задача про суму чисел: Напишіть програму, яка знаходить суму всіх чисел від 1 до N, де N вводиться користувачем."
// );

// let numberN = null;
// let sum1N = null;

// do {
//   numberN = +prompt("Input the number N ", "20");
// } while (!Number.isFinite(numberN));

// for (let i = 1; i <= numberN; i++) {
//   sum1N += i;
// }
// console.log("Sum from 1 to N: ", sum1N);

// console.log("// 2");
// console.log(
//   "Напишіть програму, яка виводить на екран таблицю множення від 1 до 10."
// );

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
// }

console.log("// 3");
console.log(
  "Напишіть програму, яка перевіряє, чи є задане число простим за допомогою циклу."
);

let inputNumber = null;
let flag = null;

do {
  inputNumber = +prompt("Inpur some number: ", "10");
} while (!Number.isFinite(inputNumber));

for (let i = inputNumber; i >= 1; i--) {
  if (inputNumber % i === 0) {
    ++flag;
  }
}

if (flag <= 2) {
  console.log("Input number is prime!");
} else {
  console.log("Input number is not prime!");
}
