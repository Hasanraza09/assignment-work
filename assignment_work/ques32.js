var current_users = ["Hasan", "Hussain", "Haram", "Saeed", "Jawed", "Usman"];
var new_users = ["Ahmed", "Ali", "Asad", "Haram", "Hussain"];
var _loop_1 = function (new_user) {
    var lowercase_new_user = new_user.toLowerCase();
    if (current_users.some(function (user) { return user.toLowerCase() === lowercase_new_user; })) {
        console.log("Sorry, ".concat(new_user, " has already been used. Please enter a new username."));
    }
    else {
        console.log("Congratulations, ".concat(new_user, " is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
