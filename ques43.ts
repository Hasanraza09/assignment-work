let magicians = ["Penn & Teller", "Derren Brown", "Dai Vernon", "Lance Burton", "Black Herman"];

function make_great(magicians){
    return magicians.map(magician => `The Great ${magician}`)
}
function show_magicians(magicians){
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let origionalArr = [...magicians];

let greatMagicians = make_great(origionalArr);

console.log("Origional Magicians:");
show_magicians(origionalArr);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);


