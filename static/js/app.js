// from data.js
var tableData = data;

// Console.log the weather data from data.js
console.log("--->  View the data in the data.js file.")
console.log(data);

// Obtain a reference to the table body
var tbody = d3.select("tbody");





// Step 1: Use d3 to update each cell's text with
// sighting values (weekday, date, high, low)
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

console.log("Step 1 complete - sighting data has been added to the table.")

//  Step 2 - Search by State

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("form-control");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(people);
  
    var filteredData = people.filter(person => person.bloodType === inputValue);
  
    console.log(filteredData);