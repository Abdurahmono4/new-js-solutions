/**
 * 1-masala:
 *let num = 4563;
let counter = 0;

let b = num % 10;
let o = ((num % 100) - (num % 10)) / 10;
let y = ((num % 1000) - (num % 100)) / 100;
let m = (num - (num % 1000)) / 1000;

if (b % 2 == 0) {
  counter++;
}
if (o % 2 == 0) {
  counter++;
}
if (y % 2 == 0) {
  counter++;
}
if (m % 2 == 0) {
  counter++;
}

console.log(counter);


2-masala:
let num = 226;
let result = 0;

let b = num % 10;
let o = ((num % 100) - (num % 10)) / 10;
let y = ((num % 1000) - (num % 100)) / 100;
result = b + o + y;

if (result % 2 == 0 && result % 5 == 0) {
  console.log(result);
}

3-masala:
let num = +prompt("please enter first number");
let num2 = +prompt("please enter second number");
let num3 = +prompt("please enter third number1");

let result = 0;
if (num > num2 && num < num3) {
  result = num;
}
if (num2 > num && num2 < num3) {
  result = num2;
}
if (num3 > num2 && num > num3) {
  result = num3;
}

console.log(result);

4-masala:
let num = +prompt("please enter first number");
let result = "your number is not palindrome";
let b = num % 10;
let o = ((num % 100) - (num % 10)) / 10;
let y = ((num % 1000) - (num % 100)) / 100;
let m = (num - (num % 1000)) / 1000;

if (b == b) {
  result = "your number is palindrome";
}

if (o == b && num < 100) {
  result = "your number is palindrome";
  console.log(result);
}

if (b == y && num < 1000) {
  result = "your number is palindrome";
  console.log(result);
}

if (b == m && y == o && num <= 9999) {
  result = "your number is palindrome";

  console.log(result);
}

document.write(result);
 
5-masala:Alisher masalasi;
let money = +prompt("please enter your money");

let ticket = 11000.34 * 500;
let hotel = 11000.34 * 250;
let museum = 12354.03 * 120;

let result = ticket + hotel + museum;

if (money >= result) {
  console.log("Oq yo'l");
}

if (money < result) {
  console.log("Alisher aka sabr qiling");
}
 */
