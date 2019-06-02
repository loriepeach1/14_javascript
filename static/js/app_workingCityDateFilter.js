// from data.js
var tableData = data;

// Console.log the weather data from data.js
console.log("--->  View the data in the data.js file.")
//console.log(data);

// Obtain a reference to the table body
var tbody = d3.select("tbody");


var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

//  Function to populate the table with data
var populate = (dataInput) => {

  dataInput.forEach(sightings => {
    var row = tbody.append("tr");
    columns.forEach(column => row.append("td").text(sightings[column])
    )
  });
}

//Populate table with initial values
populate(tableData);

console.log("Step 1 complete - full list of sighting data has been added to the table.")

//   Declare variables where user inputs the data
var userInputDate = d3.select("#datetime");
var userInputCity = d3.select("#city");
var userInputState = d3.select("#state");
var userInputShape = d3.select("#shape");
var resetButton = d3.select("#reset-btn");
var submit = d3.select("#filter-btn");


// Select the submit button

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    //These are the values entered by the user
    var inputDate = userInputDate.property("value").trim();
    var inputCity = userInputCity.property("value").toLowerCase().trim();
    var inputState = userInputState.property("value").toLowerCase().trim();
    var inputShape = userInputShape.property("value").toLowerCase().trim();

    //Filter the table for the fields mathing the user values
    var filterDate = data.filter(data => data.datetime === inputDate);
    console.log(filterDate)

    var filterCity = data.filter(data => data.city === inputCity);
    console.log(filterCity)

    var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
    console.log(filterData)


  // Add filtered sighting to table
  tbody.html("");

  let response = {
    filterDate, filterCity, filterData
  }

  if (response.filterData.length !== 0) {
    populate(filterData);
  }
    else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
      populate(filterCity) || populate(filterDate);
  
    }
    else {
      tbody.append("tr").append("td").text("No results found!"); 
    }
})

resetButton.on("click", () => {
  tbody.html("");
  populate(tableData)
  console.log("Table reset")
})


// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reference
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// how to filter a table
// https://stackoverflow.com/questions/9127498/how-to-perform-a-real-time-search-and-filter-on-a-html-table

//go through each row
// https://www.w3schools.com/howto/howto_js_filter_table.asp

//more of how to filter a table
// https://stackoverflow.com/questions/51187477/how-to-filter-a-html-table-using-simple-javascript
