// from data.js
var tableData = data;


var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Console.log the weather data from data.js
console.log("--->  View the data in the data.js file.")
console.log(data);

// Obtain a reference to the table body
var tbody = d3.select("tbody");


// Step 1: Update each cell's text 
var populate = (dataInput) => {

  dataInput.forEach(sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(sightings[column])
    )
  });
}

//Populate table
populate(tableData);

console.log("Step 1 complete - full list of sighting data has been added to the table.")

//   Declare variables
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var resetButton = d3.select("#reset-btn");
var submitButton = d3.select("#filter-btn");



// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reference
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// how to filter a table
// https://stackoverflow.com/questions/9127498/how-to-perform-a-real-time-search-and-filter-on-a-html-table

//go through each row
// https://www.w3schools.com/howto/howto_js_filter_table.asp

//more of how to filter a table
// https://stackoverflow.com/questions/51187477/how-to-filter-a-html-table-using-simple-javascript
