function orderSandwich(...items){
    console.log("Sandwich Summary:");
    console.log("Your Sandwich has following items:");
    items.forEach((item,idx) =>{
        console.log(`${idx + 1}- ${item} `);
    })   
    console.log();
}

orderSandwich("Chicken", "Avocado", "Bacon", "Swiss Cheese", "Lettuce", "Tomato");
orderSandwich("Sliced roast beef", "Mayonnaise", "Lettuce","Salt and pepper");
orderSandwich("Cuban bread", "Roast pork", "Ham", "Swiss cheese", "Dill pickles", "Mustard", "Butter");
