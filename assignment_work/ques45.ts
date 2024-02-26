function car_info(manufacturer, model, color?, year?){
    let car: any= {
        manufacturer: manufacturer,
        model: model
    }
    if(color){
        car.color = color;    
    }
    if(year){
        car.year = year;
    }
    return car;
}
 let mycar = car_info("Honda", "Civic", "red", 2020);

 console.log(mycar);
 