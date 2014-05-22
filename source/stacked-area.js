angular.module('angular-dimple.stacked-area', [])

.directive('stackedArea', ['angular-dimple.core', function (core) {
  return {
    restrict: 'E',
    replace: true,
    require: ['stackedArea', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var areaController = $controllers[0];
      var chart = graphController.getChart();

      function addArea () {
        if ($attrs.series) {
          area = chart.addSeries([$attrs.series], dimple.plot.area);
        } else {
          area = chart.addSeries([$attrs.field], dimple.plot.area);
        }
        core.filter(area, $scope.data, $attrs.field, $attrs.value, $attrs.filter);
        area.lineMarkers = false;
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