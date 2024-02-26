function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    console.log("Your Sandwich has following items:");
    items.forEach(function (item, idx) {
        console.log("".concat(idx + 1, "- ").concat(item, " "));
    });
    console.log();
}
orderSandwich("Chicken", "Avocado", "Bacon", "Swiss Cheese", "Lettuce", "Tomato");
orderSandwich("Sliced roast beef", "Mayonnaise", "Lettuce", "Salt and pepper");
orderSandwich("Cuban bread", "Roast pork", "Ham", "Swiss cheese", "Dill pickles", "Mustard", "Butter");
