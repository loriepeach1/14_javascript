// from data.js
var tableData = data;

// Console.log the weather data from data.js
console.log("--->  View the data in the data.js file.")
console.log(data);

// Obtain a reference to the table body
var tbody = d3.select("tbody");


// Step 1: Use d3 to update each cell's text 
 data.forEach(function(sighting) {
   //console.log(sighting);
   var row = tbody.append("tr");
   Object.entries(sighting).forEach(function([key, value]) {
     //console.log(key, value);
     // Append a cell to the row for each value
     // in the weather report object
     var cell = row.append("td");
     cell.text(value);
   });
});

console.log("Step 1 complete - full list of sighting data has been added to the table.")

//   Declare variables
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
//var inputState = d3.select("#state");
var resetButton = d3.select("#reset-btn");
var submit = d3.select("#filter-btn");

//  Step 2 - Search by State

// Select the submit button

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#state");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = tableData.filter(sight => sight.state === inputValue);
  
    console.log(filteredData);

});


// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reference
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// how to filter a table
// https://stackoverflow.com/questions/9127498/how-to-perform-a-real-time-search-and-filter-on-a-html-table

//go through each row
// https://www.w3schools.com/howto/howto_js_filter_table.asp

//more of how to filter a table
// https://stackoverflow.com/questions/51187477/how-to-filter-a-html-table-using-simple-javascript
