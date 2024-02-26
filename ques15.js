var guests = ["Jawed", "Osman", "Shakeel"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza\n"));
});
console.log("Unfortunately, ".concat(guests[2], " can't make it to dinner."));
var newGuest = "Asif";
guests[2] = newGuest;
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza"));
});
