// from data.js
var tableData = data;
console.log(tableData)
// getting the reference to the table body
var tbody = d3.select('tbody')


// function to display the data table
function displayTable(data) { 
    
    // clearing any existing data
    tbody.html("");

    data.forEach((sighting) => {
        var row = tbody.append('tr');
        Object.entries(sighting).forEach((value) => {
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
    console.log(`filter value  ${filterValue}`);
    console.log(`filter id ${filterID}`);
    
    // checking if the filter changed
    if (filterValue) {
        filterList[filterID] = filterValue;
    }
    else {
        delete filterList[filterID];
    }

    // calling thge function filterUOFTable that will use the filterList
    filterUFOTable();
};


function filterUFOTable() {
    
    var filteredTable = tableData; 
    console.log(`filteredTable ${filteredTable}`);
    console.log(`this is the filterlits: ${filterList}`)
    //loop gthrough the filters and match based on values
    Object.entries(filterList).forEach (([key, value]) =>
    {
        filteredTable = filteredTable.filter(row => row[key] === value);

    });
   //console.log(`filteredTable ${filteredTable}`);
    // reconstruct the table
    displayTable(filteredTable);
};



d3.selectAll(".filter").on("change", filtersActive);

displayTable(tableData);


// function runEnter() {
    
//     // preventing the page from refreshing
//     d3.event.preventDefault();

//     // // selecting the inpput elements and getting the raw HTML node
//     var inputData = d3.selectAll('input');
    
//     // getting the value property of the input element and changing it to lower case (for fields other than date)
//     var inputValues = inputData.property('value').trim().toLowerCase();
//    // console.log(inputValues);
    
//     // getting the filtered-by-value data from the input entered
//     var filteredData = tableData.filter(data => data.datetime === inputValues ||
//                                                 data.city === inputValues ||
//                                                 data.state === inputValues ||
//                                                 data.country === inputValues ||
//                                                 data.shape === inputValues);
//     // dictionary of filters, a function that checks the input if it changed or not
//     // then if it changed, add it to the filtered values   
//     //console.log(filteredData);

//     if (inputValues) {
//         // Clearing the loaded data to prevent appending
//         tbody.html("");

//         // populate the table with the filtered data
//         filteredData.forEach((sighting) => {
//             var row = tbody.append('tr');
//             Object.entries(sighting).forEach(([key, value]) => {
//                 var cell = row.append('td');
//                 cell.text(value);
//             });
//         })
//     }
//     else {
//         displayTable(data);
//     }
// };

// displayTable(data);



// // from data.js
// var tableData = data;
// console.log(tableData)
// // getting the reference to the table body
// var tbody = d3.select('tbody')

// // selecting the form group
// var form = d3.select('#form');

// // selecting the button that filters the information
// var button = d3.select('#filter-btn');



// function displayTable(data) {    
//     tableData.forEach((sighting) => {
//         var row = tbody.append('tr');
//         Object.entries(sighting).forEach(([key, value]) => {
//             var cell = row.append('td');
//             cell.text(value);
//         });
//     })
// };

// var filtersList = {};

// function activeFilters() {
//     // obtaining the filters values from the input
//     var filterValue = d3.select(this).select('input').property('value').trim().toLowerCase();
//     // obtaninign the filter id for validation
//     var filterID = d3.select(this).select('input').attr('id');
//     // printing to the console for checks
//     console.log(`filterValue: ${filterValue}`);
//     console.log(`filterID: ${filterID}`);

//     // append key, val in filtersList



//     // 
    
//     tableData = tableData.filtersList(function(item) {
//         for (var key in filtersList) {
//           if (item[key] === undefined || item[key] != filterList[key])
//             return false;
//         }
//         return true;
//     });

//     displayFiltered()
    
// };

// function displayFiltered() {
    
//     var filteredTable = tableData; 
//     //console.log(`filteredTable ${filteredTable}`);
//     // console.log(`this is the filterlits: ${filterList}`)
//     //loop gthrough the filters and match based on values
//     Object.entries(filterList).forEach (([key, value]) =>
//     {
//         filteredTable = filteredTable.filter(row => row[key] === value);

//     });
//    //console.log(`filteredTable ${filteredTable}`);
//     // reconstruct the table
//     displayTable(filteredTable);    
    
// };

// // creating event handlers for the button
// d3.selectAll(".filter").on("change", activeFilters);
// // button.on('click', activeFilters);
// // form.on('change', runEnter); 



// displayTable();
