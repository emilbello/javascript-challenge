// from data.js
var tableData = data;
console.log(tableData)
// getting the reference to the table body
var tbody = d3.select('tbody')

// // selecting the form group
// var form = d3.select('#form');

// // selecting the button that filters the information
// var button = d3.select('#filter-btn');

// // creating event handlers for the button
// button.on('click', runEnter); 
// form.on('change', runEnter); 

// function to display the data table
function displayTable(data) {    // added data within the function
    
    // clearing any existing data
    tbody.html(""); // added

    tableData.forEach((sighting) => {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach((value) => {
            var cell = row.append('td');
            cell.text(value);
        });
    })
};


create an empty dict of all filters
var 

// function to display the table when the filters are active
function runEnter() {
    
    // preventing the page from refreshing
    d3.event.preventDefault();

    // // selecting the inpput elements and getting the raw HTML node
    var inputData = d3.selectAll('input');
    
    // getting the value property of the input element and changing it to lower case (for fields other than date)
    var inputValues = inputData.property('value').trim().toLowerCase();
    console.log(inputValues);
    
    // getting the filtered-by-value data from the input entered
    var filteredData = tableData.filter(data => data.datetime === inputValues ||
                                                data.city === inputValues ||
                                                data.state === inputValues ||
                                                data.country === inputValues ||
                                                data.shape === inputValues);
    // dictionary of filters, a function that checks the input if it changed or not
    // then if it changed, add it to the filtered values   
    //console.log(filteredData);

    if (inputValues) {
        // Clearing the loaded data to prevent appending
        tbody.html("");

        // populate the table with the filtered data
        filteredData.forEach((sighting) => {
            var row = tbody.append('tr');
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append('td');
                cell.text(value);
            });
        })
    }
    else {
        displayTable(data);
    }
};

displayTable(data);