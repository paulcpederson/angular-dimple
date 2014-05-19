angular.module('angular-dimple.area', [])

.directive('area', [function () {
  return {
    restrict: 'E',
    replace: true,
    require: ['area', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var areaController = $controllers[0];
      var chart = graphController.getChart();

      function addArea () {
        var filteredData;
        area = chart.addSeries([$attrs.field], dimple.plot.area);
        if ($scope.data !== null && $attrs.value !== undefined) {
          filteredData = dimple.filterData($scope.data, $attrs.field, [$attrs.value]);
          area.data = filteredData;
        }
        area.lineMarkers = true;
        graphController.draw();
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addArea();
        }
      });
    }
  };
}]);