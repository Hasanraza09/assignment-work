let usernames = ["Hasan", "Hussain", "admin", "Haram", "Asad", "Ahmed"];
for (const username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else{
        console.log(`Hello ${username}, thank you for logging in again.`)
    }
}