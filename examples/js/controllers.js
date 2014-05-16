angular.module('myApp.controllers', [])

.controller('lineGraphController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });
}])

.controller('areaController', ['$scope', function($scope) {
  var svg = dimple.newSvg("#chartContainer", 590, 400);
  d3.tsv("/data/example_data.tsv", function (data) {
    data = dimple.filterData(data, "Owner", ["Aperture", "Black Mesa"]);
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 505, 305);
    var x = myChart.addCategoryAxis("x", "Month");
    x.addOrderRule("Date");
    myChart.addMeasureAxis("y", "Unit Sales");
    var s = myChart.addSeries(null, dimple.plot.area);
    myChart.draw();
  });
}])


.controller('stackedAreaController', ['$scope', function($scope) {
    var svg = dimple.newSvg("#chartContainer", 590, 400);
    d3.tsv("/data/example_data.tsv", function (data) {
      data = dimple.filterData(data, "Owner", ["Aperture", "Black Mesa"]);
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 505, 305);
      var x = myChart.addCategoryAxis("x", "Month");
      x.addOrderRule("Date");
      myChart.addMeasureAxis("y", "Unit Sales");
      var s = myChart.addSeries("Channel", dimple.plot.area);
      myChart.addLegend(60, 10, 500, 20, "right");
      myChart.draw();
    });
}])

.controller('expandedAreaController', ['$scope', function($scope) {
    var svg = dimple.newSvg("#chartContainer", 590, 400);
    d3.tsv("/data/example_data.tsv", function (data) {
      data = dimple.filterData(data, "Owner", ["Aperture", "Black Mesa"]);
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(65, 30, 505, 305);
      var x = myChart.addCategoryAxis("x", "Month");
      x.addOrderRule("Date");
      myChart.addPctAxis("y", "Unit Sales");
      myChart.addSeries("Channel", dimple.plot.area);
      myChart.addLegend(60, 10, 500, 20, "right");
      myChart.draw();
    });
}])

.controller('barController', ['$scope', function($scope) {
  var svg = dimple.newSvg("#chartContainer", 590, 400);
  d3.tsv("/data/example_data.tsv", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 510, 305);
    var x = myChart.addCategoryAxis("x", "Month");
    x.addOrderRule("Date");
    myChart.addMeasureAxis("y", "Unit Sales");
    myChart.addSeries(null, dimple.plot.bar);
    myChart.draw();
  });
}])

.controller('stackedBarController', ['$scope', function($scope) {
  var svg = dimple.newSvg("#chartContainer", 590, 400);
  d3.tsv("/data/example_data.tsv", function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(60, 30, 510, 305);
    var x = myChart.addCategoryAxis("x", "Month");
    x.addOrderRule("Date");
    myChart.addMeasureAxis("y", "Unit Sales");
    myChart.addSeries("Channel", dimple.plot.bar);
    myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();
  });
}])

.controller('scatterController', ['$scope', function($scope) {
  var svg = dimple.newSvg("#chartContainer", 590, 400);
    d3.tsv("/data/example_data.tsv", function (data) {
      data = dimple.filterData(data, "Date", "01/12/2012");
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 500, 330);
      myChart.addMeasureAxis("x", "Unit Sales");
      myChart.addMeasureAxis("y", "Operating Profit");
      myChart.addSeries(["SKU", "Channel"], dimple.plot.bubble);
      myChart.addLegend(200, 10, 360, 20, "right");
      myChart.draw();
    });
}]);
