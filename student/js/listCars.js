function listCars() {
    $.ajax({
        url: '/cars',
        type: 'get',
        success: function (carData) {
            let resultTable = $(document).find('#carListTable');
            let tableColumnNames = getCarColumnNames();
            resultTable.append(tableColumnNames);
            $.each(carData, function (idx, value) {
                addRowToTable(value, resultTable);
            });
        },
        error: function() {
            window.alert('Could not load any car.');
        }
    });
}

function getCarColumnNames() {
    let tableColumnNames = $('<tr class="resultTableColumnNames"></tr>');
    let nameCell = $('<td class="resultTableColumnName">'+"NAME"+'</td>');
    let consumptionCell = $('<td class="resultTableColumnName">'+"CONSUMPTION"+'</td>');
    let colorCell = $('<td class="resultTableColumnName">'+"COLOR"+'</td>');
    let manufacturerCell = $('<td class="resultTableColumnName">'+"MANUFACTURER"+'</td>');
    let availableCell = $('<td class="resultTableColumnName">'+"AVAILABLE"+'</td>');
    let yearCell = $('<td class="resultTableColumnName">'+"YEAR"+'</td>');
    let horse_powerCell = $('<td class="resultTableColumnName">'+"HORSEPOWER"+'</td>');
    tableColumnNames.append(nameCell);
    tableColumnNames.append(consumptionCell);
    tableColumnNames.append(colorCell);
    tableColumnNames.append(manufacturerCell);
    tableColumnNames.append(availableCell);
    tableColumnNames.append(yearCell);
    tableColumnNames.append(horse_powerCell);
    return tableColumnNames;
}