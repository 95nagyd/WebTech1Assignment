function createManufacturerObject() {
    const formManufacturer = document.getElementById('formManufacturer');

    if(!formManufacturer.name.value){
        window.alert('Name is required!');
        return;
    }
    if(!formManufacturer.country.value){
        window.alert('Country is required!');
        return;
    }
    if(!formManufacturer.founded.value){
        window.alert('Date of foundation is required!');
        return;
    }

    let manufacturer = {};
    manufacturer.name = formManufacturer.name.value;
    manufacturer.country = formManufacturer.country.value;
    let date = new Date(formManufacturer.founded.value);
    const opts = {year: 'numeric', month: 'numeric', day: 'numeric'};
    manufacturer.founded = date.toLocaleDateString("en-US", opts);
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

