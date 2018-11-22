function createCarObject() {
    const formCar = document.getElementById('formCar');
    let car = {};
    car.name = formCar.name.value;
    car.consumption = formCar.consumption.value + '/100km';
    car.color = formCar.color.value;
    car.manufacturer = formCar.manufacturer.value;
    car.year = formCar.year.value;
    car.available = formCar.available.value;
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
                listCarsAjax();
            });
        },
        error: function () {
            window.alert('Car [' + car.name + "] has to be unique.");
        }
    });
}
