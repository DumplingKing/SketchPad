$(document).ready(function() {
  grid(16,16);
});

$(".button").click(function() {
  var size = prompt("Please select grid size between 1 and 24");
  grid(size, size);
});

function grid(rows, cols) {
  var table = "<table>";
  var size = (1 / rows * 525) + "px";
  
  for (i=0; i<rows; i++) {
    table += "<tr>";
    for (j=0; j<cols; j++) {
      table += "<td>"+"</td>";
    }
  table += "</tr>";
  }
  table += "</table>";

  $("#container").empty().append(table);
  $("tr").css("height", size)
  $("td").css("color", "red");
}




  
