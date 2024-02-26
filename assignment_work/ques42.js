var magicians = ["Penn & Teller", "Derren Brown", "Dai Vernon", "Lance Burton", "Black Herman"];
function show_magicians(magiciansArray) {
    magiciansArray.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
function make_great(magicia) {
    return magicia.map(function (magician) { return "The Great ".concat(magician); });
}
magicians = make_great(magicians);
show_magicians(magicians);
