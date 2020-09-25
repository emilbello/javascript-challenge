// from data.js
var tableData = data;
console.log(tableData)
// getting the reference to the table body
var tbody = d3.select('tbody')


// function to display the data table
function displayTable(data) { 
    
    // clearing any existing data
    tbody.html("");

    // iterating to populate the table.
    data.forEach((sighting) => {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach(([key, value]) => { // if the key is not specified, the table is populated with both the key and the value
            var cell = row.append('td');
            cell.text(value);
        });
    })
};


// creating an empty dict that will be populated with all filters input
var filterList = {};

// function to display the table when the filters are active
function filtersActive() {
    // obtaining the filters values from the input
    var filterValue = d3.select(this).select('input').property('value').trim().toLowerCase();
    // obtaninign the filter id for validation
    var filterID = d3.select(this).select('input').attr('id');
    // printing to the console for validation
    // console.log(`filter value  ${filterValue}`);
    // console.log(`filter id ${filterID}`);
    
    // checking if the filter changed and deleting empty inputs
    if (filterValue) {
        filterList[filterID] = filterValue;
    }
    else {
        delete filterList[filterID];
    }

    // calling the function filterUOFTable that will use the filterList
    filterUFOTable();
};


function filterUFOTable() {
    
    // createing the variable that will hold the filtered table info
    var filteredTable = tableData; 
    // console.log(`filteredTable ${filteredTable}`);
    // console.log(`this is the filterlits: ${filterList}`)
    
    //loop gthrough the filters and match values.
    Object.entries(filterList).forEach (([key, value]) =>
    {
        filteredTable = filteredTable.filter(row => row[key] === value);

    });
   //console.log(`filteredTable ${filteredTable}`);
    // reconstruct the table and display it
    displayTable(filteredTable);
};


// filtering dinamically for changes in the input field.
d3.selectAll('.filter').on('change', filtersActive);

// display the unfiltered dataset if no filter change (default view)
displayTable(tableData);