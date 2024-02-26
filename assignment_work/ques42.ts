let magicians = ["Penn & Teller", "Derren Brown", "Dai Vernon", "Lance Burton", "Black Herman"];

function show_magicians(magicians){
    magicians.forEach(magician => {
        console.log(magician);       
    })
}

show_magicians(magicians);

function make_great(magicians){
    return magicians.map(magician => `The Great ${magician}`)
}

magicians = make_great(magicians);

show_magicians(magicians);
