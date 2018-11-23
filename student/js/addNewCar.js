function createCarObject() {
    const formCar = document.getElementById('formCar');

    if(!formCar.name.value){
        window.alert('Name is required!');
        return;
    }
    if(formCar.consumption.value<1 || formCar.consumption.value>30){
        window.alert('Consumption is required(between 1 and 30)!');
        return;
    }
    if(!formCar.color.value){
        window.alert('Color is required!');
        return;
    }
    if(!formCar.available.value){
        window.alert('Available number is required!');
        return;
    }
    if(formCar.year.value<1950 || formCar.year.value>2018){
        window.alert('Year of manufacture is required(between 1950 and 2018)!');
        return;
    }
    if(formCar.horsepower.value<1 || formCar.horsepower.value>1000){
        window.alert('Horsepower is required(between 1 and 1000)!');
        return;
    }

    let car = {};
    car.name = formCar.name.value;
    car.consumption = formCar.consumption.value + '/100km';
    car.color = formCar.color.value;
    car.manufacturer = formCar.manufacturer.value;
    car.available = formCar.available.value;
    car.year = formCar.year.value;
    car.horsepower = formCar.horsepower.value;
    return car;
}

function postCar() {
    let car = createCarObject();
    $.ajax({
        url: '/addCar',
        type: 'post',
        data: car,
        success: function () {
            window.alert('Car (' + car.name + ') has been added to the database.');
            $('#content').load('listCars.html', function () {
                listCarsjQuery();
            });
        },
        error: function () {
            window.alert('Car [' + car.name + "] has to be unique.");
        }
    });
}
