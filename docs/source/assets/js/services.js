angular.module('myApp.services', [])

.service('dataService', ['$http', function($http) {
  return {
    getData: function() {
      return $http.get('/angular-dimple/data/example_data.json');
    },
    getSimpleData: function() {
      return $http.get('/angular-dimple/data/simple.json');
    }
  };
}]);
