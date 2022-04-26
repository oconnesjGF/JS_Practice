// ES6
const myAge = 29;
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge - 2;
laterYears *= 4;
console.log(`Early years is: ${earlyYears}`);
console.log(`Later years is: ${laterYears}`);
let myAgeInDogYears = earlyYears + laterYears;
console.log(`My age in Dog Years is: ${myAgeInDogYears}`);
let myName = "Sam O'Connell".toLowerCase();
//myName = myName.toLowerCase();
//console.log(myName);

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
/*

// ES5
var myAge = 29;
var earlyYears = 2;
earlyYears *= 10.5;
var laterYears = myAge - 2;
laterYears *= 4;
console.log(`Early years is: ${earlyYears}`);
console.log(`Later years is: ${laterYears}`);
var myAgeInDogYears = earlyYears + laterYears;
console.log(`My age in Dog Years is: ${myAgeInDogYears}`);
var myName = "Sam O'Connell".toLowerCase();
//myName = myName.toLowerCase();
//console.log(myName);

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
*/
