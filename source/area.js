angular.module('angular-dimple.area', [])

.directive('area', ['angular-dimple.core', function (core) {
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
        area = chart.addSeries([$attrs.field], dimple.plot.area);
        core.filter(area, $attrs, $scope.data);
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

