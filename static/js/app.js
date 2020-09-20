// from data.js
var tableData = data;
console.log(tableData)
// getting the reference to the table body
var tbody = d3.select('tbody')

// selecting the form group
var form = d3.select('.form-group');

// selecting the button that filters the information
var button = d3.select('#filter-btn');

// creating event handlers
button.on('click', runEnter); // function inside that activates default display of input blank and if not the filter?
form.on('click', runEnter); // is this affecting all the forms?




// data displayed when the filters are active
function runEnter() {
    
    // preventing the page from refreshing
    d3.event.preventDefault();

    // selecting the inpput elemnt and getting the raw HTML note
    var inputDate = d3.select('#datetime');

    // getting the value property of the input element
    var DateValue = inputDate.property('value');

    // getting the filtered-by-date data from the input date
    var filteredDate = tableData.filter(date => date.datetime === DateValue);

    if (DateValue !== '') {
        // populate the table with the filtered data
        filteredDate.forEach((sighting) => {
            var row = tbody.append('tr');
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append('td');
                cell.text(value);
            });
        });
    }
    else {
        // data displayed when no filters are active
        tableData.forEach((sighting) => {
            var row = tbody.append('tr');
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append('td');
                cell.text(value);
            });
        });
    }
    
    console.log(filteredDate);

};