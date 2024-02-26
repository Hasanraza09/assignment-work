let guestList = ["Jawed", "Osman", "Shakeel"];
guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza`)
})

// Someone can't make it to dinner
console.log(`Unfortunately, ${guestList[2]} can't make it to dinner.`);
let newGuest: string = "Asif";
guestList[2] = newGuest;

guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza`);
})

// Inform about the bigger dinner table
console.log("\nGreat news! We now have more space at the dinner table.");
guestList.unshift("Haram");
guestList.splice((guestList.length + 1) / 2, 0, "Hussain");
guestList.push("Hasnain");

guestList.forEach(guest => {
    console.log(`Dear ${guest},\n\nI would like to invite you to dinner at my home. It would be an honor to have you join us for a delightful evening of conversation and good food.\n\nLooking forward to seeing you,\n Hasan Raza\n`);
});
