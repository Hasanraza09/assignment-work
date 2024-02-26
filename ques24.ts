let str1 = "Hasan";
let str2 = "Raza";
let num1 = 12;
let num2 = 25;
let arr: any[] = [2, 4, 6, 8, 10];

console.log(" Tests for equality and inequality with strings:");   
console.log(str1 === "Hasan"); // True
console.log(str2 !== "Raza"); // False
console.log(str1 !== str2); // True
console.log();

console.log("Tests using the lower case function:");   
console.log(str1.toLowerCase() === "hasan"); // True
console.log(str2.toLowerCase() === "RAZA"); // False
console.log(str2.toLowerCase() !== "Raza");  // True
console.log();

console.log("Numerical tests:");
console.log(num1 === 12); // True
console.log(num2 !== 25); // False
console.log(num2 > num1); // True
console.log(num1 < 12); // False
console.log(num1 >= 11); // True
console.log(num2 <= 20); // False
console.log();

console.log("Tests using 'AND' and 'OR' operators");
console.log(num1 == 12 && num2 == 25); // True
console.log(num1 % 2 === 0 && num2 % 2 === 0 ); // False
console.log(num1 > num2 || num2 === 25) // True
console.log(num1 !== 12 || num2 === 12 ); // False
console.log();

console.log("Test whether an item is in a array");
console.log(arr.some(item => item === 4)); // True
console.log(arr.indexOf(2) === 1); // False
console.log();

console.log("Test whether an item is not in a array");
console.log(arr.some(item => item !== 12)); // True
console.log(arr.indexOf(6) !== 2); // False
console.log();











