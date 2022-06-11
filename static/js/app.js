// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


// Create function to clear the table
function buildTable(data) {
    // Clear existing data
    tbody.html("");
  
    // Append a row and cells for each value in row
    data.forEach((dataRow) => {

      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }


function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  };
}


// Attach mutton event
d3.selectAll("#filter-btn").on("click", handleClick);

// Build table when pate loads
buildTable(tableData);