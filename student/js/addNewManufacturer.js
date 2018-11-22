function createManufacturerObject() {
    const formManufacturer = document.getElementById('formManufacturer');
    let manufacturer = {};
    manufacturer.name = formManufacturer.name.value;
    manufacturer.country = formManufacturer.country.value;
    let date = new Date(formManufacturer.founded.value);
    const opts = {year: 'numeric', month: 'numeric', day: 'numeric'};
    manufacturer.founded = date.toLocaleDateString("hu-HU", opts);
    return manufacturer;
}

function postManufacturer() {
    let manufacturer = createManufacturerObject();
    $.ajax({
        url: '/addManufacturers',
        type: 'post',
        data: manufacturer,
        success: function () {
            window.alert('Manufacturer (' + manufacturer.name + ') has been added to the database.');
            $('#content').load('listManufacturers.html', function () {
                listManufacturersjQuery();
            });
        },
        error: function () {
            window.alert('Manufacturer [' + manufacturer.name + "] has to be unique.");
        }
    });
}