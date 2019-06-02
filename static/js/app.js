////////////////////////////////////////////////////////////
//  Part  1 - Get the Data
////////////////////////////////////////////////////////////

console.log("-----Begin Part  1 -----")

// the data file is data.js is an array called data
// the data in the file is stored into a variable called tableData
var tableData = data;

// In the console, note the step is complete and show the data
console.log("Variable tableData has been created")
//console.log(data);

// Obtain a reference to the table body
var tbody = d3.select("tbody");


//  Display the data from the file to the HTML webpage
// Function will be called each time a new display of data is needed.
function populate(data) {
  // First, clear out any existing data in the tbody tag
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

//Populate table with initial values
// will be used when the table first loads and anytime the user selects reset table button

populate(tableData);

console.log("-----End  Part  1 -----")

//////////////////////////////////////////////////////////////////////
// Part 2 - Displaying Filtered Data
//////////////////////////////////////////////////////////////////////

// Solution allows all filters to be used.    Each filter is NOT defined.
//   See the HTML file where li class="filter

// create an array to hold all the filters
var filters = {};

function updateFilters() {

  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");  // matches to the input elements in the HTML
  var elementValue = changedElement.property("value");   //  value of each input element in the HTML
  var filterId = changedElement.attr("id");             //  each input element has an id attribute

  //view the updateFilters initial values
  console.log("------  updateFilters funtion - initial values")
  console.log(changedElement)
  console.log(elementValue)
  console.log(filterId)

  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  //view the updateFilters initial values
  console.log("--- updateFilters funtion - end values")
  console.log(changedElement)
  console.log(elementValue)
  console.log(filterId)

  // Call function to apply all filters and rebuild the table
  filterTable();

}

function filterTable() {

  // Set the filteredData to the tableData
  let filteredData = tableData;
  //console.log("+++ Initial filteredData ++++++++++++")
  //console.log(filteredData)

  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  console.log("+++ End filteredData ++++++++++++")
  console.log(filteredData)

  // Finally, rebuild the table using the filtered Data
  populate(filteredData);
}

// Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);


//////////////////////////////////////////////////////////////////////
//  Part 3 - Miscellaneous
//////////////////////////////////////////////////////////////////////

//  Selecting reset button will clear the table results and load with all data

var resetButton = d3.select("#reset-btn");

resetButton.on("click", () => {
  tbody.html("");
  populate(tableData)
  console.log("Table reset")
})

// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reference
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////



