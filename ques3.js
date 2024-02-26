// Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var perName = "hasan raza";
console.log("Lowercase:", perName.toLowerCase());
console.log("Uppercase:", perName.toUpperCase());
var titleCaseName = perName.replace(/\b\w/g, function (val) { return val.toUpperCase(); });
console.log("Titlecase:", titleCaseName);
// // Convert to titlecase
// let titlecaseName: string = perName.replace(/\b\w/g, c => c.toUpperCase());
// console.log("Titlecase:", titlecaseName);
