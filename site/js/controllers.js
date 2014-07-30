angular.module('myApp.controllers', [])



.controller('testController', ['$scope', 'dataService', function($scope, dataService) {
   $scope.generate_data = function () {
        var retary = [];
        for (var i = 0; i < 5; i++) {
            var date = new Date(Date.now() + i * 86400000);
            var obj = {
                'Date': date,
                'Month': date.getMonth() + '-' + date.getDate(),
                'Owner': 'Aperture',
                'Unit Sales': (Math.random() * 1000) + 1000
            };
            retary[retary.length] = obj;
        }
        return {'data': retary};
    };

    $scope.update_data = function () {
        var newData = $scope.generate_data().data;
        $scope.graphData = newData;
    };

    $scope.update_data();

}])



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

.controller('ringController', ['$scope', 'dataService', function($scope, dataService) {
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
