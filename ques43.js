var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ["Penn & Teller", "Derren Brown", "Dai Vernon", "Lance Burton", "Black Herman"];
function make_great(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var origionalArr = __spreadArray([], magicians, true);
var greatMagicians = make_great(origionalArr);
console.log("Origional Magicians:");
show_magicians(origionalArr);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
