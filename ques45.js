function car_info(manufacturer, model, color, year) {
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    if (color) {
        car.color = color;
    }
    if (year) {
        car.year = year;
    }
    return car;
}
var mycar = car_info("Honda", "Civic", "red", 2020);
console.log(mycar);
