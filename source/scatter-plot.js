angular.module('angular-dimple.scatter-plot', [])

.directive('scatterPlot', ['angular-dimple.core', function (core) {
  return {
    restrict: 'E',
    replace: true,
    require: ['scatterPlot', '^graph'],
    controller: [function() {}],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var chart = graphController.getChart();

      function addScatterPlot () {
        scatterPlot = chart.addSeries([$attrs.series, $attrs.field], dimple.plot.bubble);
        core.filter(scatterPlot, $attrs, $scope.data);
        graphController.draw();
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addScatterPlot();
        }
      });
    }
  };
}]);