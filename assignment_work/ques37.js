function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of shirt is ".concat(size, "."));
    console.log("The message on ".concat(size, " shirt is \"").concat(message, "\"."));
}
// For Large Shirt
make_shirt();
// for Medium Shirt
make_shirt("medium");
// For Small Shirt
make_shirt("small", "TypeScript is Awesome!");
