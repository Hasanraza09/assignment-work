var guestList = ["Jawed", "Osman", "Shakeel", "Sattar", "Saeed"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza"));
});
// Someone can't make it to dinner
console.log("Unfortunately, ".concat(guestList[2], " can't make it to dinner."));
var newGuest = "Asif";
guestList[2] = newGuest;
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza"));
});
// Inform about the bigger dinner table
console.log("\nGreat news! I now have more space at the dinner table.");
guestList.unshift("Haram");
guestList.splice((guestList.length + 1) / 2, 0, "Hussain");
guestList.push("Hasnain");
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza\n"));
});
//Shrinking Guestlist
console.log("Unfortunately, new dinner table won’t arrive in time for the dinner and i can invite only two people for dinner");
while (guestList.length > 2) {
    var removedGuests = guestList.pop();
    console.log("I'm really Sorry, ".concat(removedGuests, ", I can't invite you to dinner."));
}
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You're still invited"));
});
guestList.pop();
guestList.pop();
console.log("Final Guest List:", guestList);
