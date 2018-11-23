function listCarsAjax(byManufacturer) {
    if (byManufacturer===false){
        $.ajax({
            url: '/cars',
            type: 'get',
            success: function (carData) {
                let resultTable = $(document).find('#carTable');
                $.each(carData, function (idx, value) {
                    addRowToTable(value, resultTable);
                });
            },
            error: function() {
                window.alert('Could not load cars.');
            }
        });
    }else{
        $.ajax({
            url: '/manufacturer',
            type: 'get',
            success: function (carData) {
                let resultTable = $(document).find('#carTable');
                $.each(carData, function (idx, value) {
                    addRowToTable(value, resultTable);
                });
            },
            error: function() {
                window.alert('Could not load cars.');
            }
        });
    }
}

function listCarsjQuery() {
    $.get('/cars', function (carData) {
        let resultTable = $(document).find('#carTable');

        $.each(carData, function (idx, value) {
            addRowToTable(value, resultTable);
        });
    });
}

function carsByManufacturer(manufacturer) {
    document.cookie = "name=" + manufacturer;
    $("#content").load("listCars.html", function() {
        listCarsAjax(true);
        changeBackground('url(../images/backgroundcar.jpg) no-repeat center fixed');
    });
}
