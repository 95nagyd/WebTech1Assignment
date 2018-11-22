$(document).on('click', '#home', function () {
    let url = '/';
    $.ajax(url, {
        type: 'GET',
        success: function (file) {
            document.open("text/html",'self');
            document.write(file);
            document.close();
        },
        error: function(file) {
            window.alert('failed to load index.html');
        }
    });
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