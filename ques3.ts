let perName: string =  "hasan raza" ;
console.log("Lowercase:", perName.toLowerCase());

console.log("Uppercase:", perName.toUpperCase());

let titleCaseName:string = perName.replace(/\b\w/g, val => val.toUpperCase());
console.log("Titlecase:", titleCaseName);
