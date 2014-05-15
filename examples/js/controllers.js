angular.module('myApp.controllers', [])

.controller('lineGraphController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });
}])

.controller('stackedAreaControllers', ['$scope', function($scope) {

}]);
