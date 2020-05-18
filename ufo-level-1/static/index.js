// Gather data from the data file 
var data = data; 
// Create variable to hold the date 
var date; 
// Select all the classes and tables we will be using
var text = d3.select(".form-control");
var output = d3.select(".test");
var table = d3.select("table");
var tbody = d3.select("tbody");

// Check console I gathered the data
console.log(data);

// Filter through the data and get a new array with all the objects 
function sights(data){
    return data.datetime == date; 
};

// Functions that takes the input value, filters the data, appends to the list 
function getdate(){
    // get the date inputted 
    date = d3.event.target.value;
    // call the filter function to get only from that date 
    var sighting = data.filter(sights);
    // Make sure we got the data we want 
    console.log(sighting);  
    // Iterate throught the new array 
    sighting.forEach((spotted) => {
        // Create a new row and fill with data
        var row = tbody.append("tr");
        Object.entries(spotted).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
// Calls for the table to be made once the user inputs.
text.on("change",getdate);

