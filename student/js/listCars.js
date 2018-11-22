function listCars() {
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
}