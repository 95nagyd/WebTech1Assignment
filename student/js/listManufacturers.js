function listManufacturersAjax() {
    $.ajax({
        url: '/manufacturers',
        type: 'get',
        success: function (manufacturerData) {
            let resultTable = $(document).find('#manufacturerTable');
            $.each(manufacturerData, function (idx, value) {
                addRowToTable(value, resultTable);
            });
        },
        error: function() {
            window.alert('Could not load any manufacturer.');
        }
    });
}

function listManufacturersjQuery() {
    $.get('/manufacturers', function (manufacturerData) {
        let resultTable = $(document).find('#manufacturerTable');

        $.each(manufacturerData, function (idx, value) {
            addRowToTable(value, resultTable);
        });
    });
}