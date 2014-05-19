angular.module('myApp.controllers', [])

.controller('lineGraphController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });
}])

.controller('areaController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });
}])


.controller('stackedAreaController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });
}])

.controller('expandedAreaController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });
}])

.controller('barController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });
}])

.controller('stackedBarController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
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
