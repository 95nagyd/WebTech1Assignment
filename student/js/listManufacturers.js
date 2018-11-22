function listManufacturers() {
    $.ajax({
        url: '/manufacturers',
        type: 'get',
        success: function (manufacturerData) {
            let resultTable = $(document).find('#manufacturerListTable');
            let tableColumnNames = getManufacturerColumnNames();
            resultTable.append(tableColumnNames);
            $.each(manufacturerData, function (idx, value) {
                addRowToTable(value, resultTable);
            });
        },
        error: function() {
            window.alert('Could not load any manufacturer.');
        }
    });
}

function getManufacturerColumnNames() {
    let tableColumnNames = $('<tr class="resultTableColumnNames"></tr>');
    let nameCell = $('<td class="resultTableColumnName">'+"NAME"+'</td>');
    let countryCell = $('<td class="resultTableColumnName">'+"COUNTRY"+'</td>');
    let foundedCell = $('<td class="resultTableColumnName">'+"FOUNDED"+'</td>');
    tableColumnNames.append(nameCell);
    tableColumnNames.append(countryCell);
    tableColumnNames.append(foundedCell);
    return tableColumnNames;
}