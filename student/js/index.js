$(document).on('click', '#home', function () {
    window.alert('homeTest');
});

$(document).on('click', '#listCars', function () {
    $('#content').load('listCars.html', function () {
        window.alert('listCarTest');
    });
});

$(document).on('click', '#listManufacturers', function () {
    $('#content').load('listManufacturers.html', function () {
        window.alert('listManufacturerTest');
    });
});