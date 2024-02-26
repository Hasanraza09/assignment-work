var invitees = ["Jawed", "Osman", "Shakeel"];
invitees.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza\n"));
});
console.log("Unfortunately, ".concat(invitees[2], " can't make it to dinner."));
var newInvitee = "Asif";
invitees[2] = newInvitee;
invitees.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza"));
});
console.log("\nGreat news! We now have more space at the dinner table.");
invitees.unshift("Haram");
invitees.splice((invitees.length + 1) / 2, 0, "Hussain");
invitees.push("Hasnain");
invitees.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza\n"));
});
