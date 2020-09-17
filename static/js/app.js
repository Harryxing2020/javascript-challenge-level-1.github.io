// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
var table = d3.select("table");
tbody.style("text-align", "center")

tableData.forEach(function (ufodata) {
    var row = tbody.append("tr")
    Object.entries(ufodata).forEach(function ([key, value]) {
        var cell = row.append("td")
        cell.text(value)
    })
})

var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#ufoform");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    console.log("-----------------------------------")

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredDatas = tableData.filter(ufodata => ufodata.datetime === inputValue);
    console.log(filteredDatas);

    ///////////////////////////////////////////////////////////////////////////////
    tbody.html("");
    filteredDatas.forEach(function (filteredData) {
        var row = tbody.append("tr")
        Object.entries(filteredData).forEach(function ([key, value]) {
            var cell = row.append("td")
            cell.text(value)
        })
    })
    /////////////////////////////////////////////////////////////////////////////////


};
