let current_users = ["Hasan", "Hussain", "Haram", "Saeed", "Jawed", "Usman"];
let new_users = ["Ahmed", "Ali", "Asad", "Haram", "Hussain"];

for (const new_user of new_users) {
    let lowercase_new_user = new_user.toLowerCase();

    if(current_users.some(user => user.toLowerCase() === lowercase_new_user)){
        console.log(`Sorry, ${new_user} has already been used. Please enter a new username.`);
    }else{
        console.log(`Congratulations, ${new_user} is available.`);
        
    }
}