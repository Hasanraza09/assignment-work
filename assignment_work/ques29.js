var favorite_fruits = ["Mango", "Apple", "Banana"];
if (favorite_fruits.some(function (fruit) { return fruit === "Mango"; })) {
    console.log("I really like Mangoes");
}
if (favorite_fruits.some(function (fruit) { return fruit === "Apple"; })) {
    console.log("I really like Apples");
}
if (favorite_fruits.some(function (fruit) { return fruit === "Banana"; })) {
    console.log("I really like Bananas");
}
if (favorite_fruits.some(function (fruit) { return fruit === "Orange"; })) {
    console.log("I really like Oranges");
}
if (favorite_fruits.some(function (fruit) { return fruit === "Strawberry"; })) {
    console.log("I really like Strawberries");
}
