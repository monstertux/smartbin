//make a fetch request to the server to retrieve weight data

var url = 'localhost:8080/trashdata';
var trashData;
fetch(url)
.then(function(response) {return response.json(); })
.then(function(json) {
  for(var i = 0; i < 7; i++) {
    trashData.push(json.trash[i].weight);
  }
});

//sets up a line chart
var ctx = document.getElementById("trash-analytics").getContext('2d');
var lineGraph = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
      //line 1
      label: 'Pounds of Trash',
      data: [20, 28, 34, 48, 56, 63, 72],
      borderColor: "#2b81f1",
      fill: false
    },
    {
      //line 2
      label: 'Pounds of Recycling',
      data: [5, 8, 12, 15, 18, 23, 26],
      borderColor: "#f12b2e",
      fill: false
    }
    ]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }
});
