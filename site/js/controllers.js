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

.controller('scatterController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });
  dataService.getSimpleData().then(function(response) {
    $scope.simpleData = response.data;
  });
}]);
