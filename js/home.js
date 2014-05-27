angular.module('homeApp', [
  'angular-dimple'
])

.controller('homeController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });
  T.init();
}])

.service('dataService', ['$http', function($http) {
  return {
    getData: function() {
      return $http.get('data/example_data.json');
    }
  };
}]);