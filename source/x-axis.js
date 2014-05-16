angular.module('angular-dimple.x-axis', [])

.directive('xAxis', [function () {
  return {
    restrict: 'E',
    replace: true,
    require: ['xAxis', '^lineGraph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var lineController = $controllers[0];
      var chart = graphController.getChart();

      function addLine () {
        var filteredData;
        line = chart.addSeries([$attrs.field], dimple.plot.line);
        if ($scope.data !== null) {
          filteredData = dimple.filterData($scope.data, $attrs.field, [$attrs.value]);
          line.data = filteredData;
        }
        line.lineMarkers = true;
        graphController.draw();
      }

      $scope.$watch('data', function(newValue, oldValue) {
        console.log('neat');
        if (newValue) {
          addLine();
        }
      });
    }
  };
}]);