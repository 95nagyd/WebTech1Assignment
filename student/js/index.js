$(document).on('click', '#home', function () {
    let url = '/';
    $.ajax(url, {
        type: 'GET',
        success: function (file) {
            document.open("text/html",'self');
            document.write(file);
            document.close();
        },
        error: function() {
            window.alert('failed to load index.html');
        }
    });
});

$(document).on('click', '#listCars', function () {
    $('#content').load('listCars.html', function () {
        listCarsjQuery();
        changeBackground('url(../images/backgroundcar.jpg) no-repeat center fixed');
    });
});

$(document).on('click', '#listManufacturers', function () {
    $('#content').load('listManufacturers.html', function () {
        listManufacturersAjax();
        changeBackground('url(../images/backgroundmanufacturer.jpg) no-repeat center fixed');
    });
});

$(document).on('click', '#addCar', function () {
    $('#content').load('addNewCar.html',function () {
        $.get('/manufacturerNames', function (manufacturerData) {
            $.each(manufacturerData, function (idx, value) {
                let opt = $('<option value="'+value+'">'+value+'</option>');
                $('#manufacturer').append(opt);
            });
        });
        changeBackground('url(../images/backgroundcar.jpg) no-repeat center fixed');
    });
});

$(document).on('click', '#addManufacturer', function () {
    $('#content').load('addNewManufacturer.html');
    changeBackground('url(../images/backgroundmanufacturer.jpg) no-repeat center fixed');
});

function changeBackground(url) {
    $('.webpage').css('background', url);
    $('.webpage').css('background-size', 'cover');
    $('.webpage').css('min-height', '100%');
}

function addRowToTable(value, resultTable) {
    let row = $('<tr class="resultTableRow"></tr>');
    let cell;
    for (let columnName in value) {
        if (value.hasOwnProperty(columnName)) {
            if(columnName == "consumption"){
                cell = $('<td class="resultTableRowCellConsumption">'+value[columnName]+'</td>');
            }else{
                cell = $('<td class="resultTableRowCell">'+value[columnName]+'</td>');
            }
            row.append(cell);
        }
    }
    resultTable.append(row);
}