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
    let month;
    if(date.getMonth()+1===1){
        month = "January";
    }else if(date.getMonth()+1===2){
        month = "February";
    }else if(date.getMonth()+1===3){
        month = "March";
    }else if(date.getMonth()+1===4){
        month = "April";
    }else if(date.getMonth()+1===5){
        month = "May";
    }else if(date.getMonth()+1===6){
        month = "June";
    }else if(date.getMonth()+1===7){
        month = "July";
    }else if(date.getMonth()+1===8){
        month = "August";
    }else if(date.getMonth()+1===9){
        month = "September";
    }else if(date.getMonth()+1===10){
        month = "October";
    }else if(date.getMonth()+1===11){
        month = "November";
    }else{
        month = "December";
    }
    date = month+" "+date.getDate()+", "+date.getFullYear();
    manufacturer.founded = date;
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

