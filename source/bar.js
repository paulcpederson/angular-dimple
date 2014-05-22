angular.module('angular-dimple.bar', [])

.directive('bar', ['angular-dimple.core', function (core) {
  return {
    restrict: 'E',
    replace: true,
    require: ['bar', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var lineController = $controllers[0];
      var chart = graphController.getChart();

      function addBar () {
        var filteredData;
        bar = chart.addSeries([$attrs.field], dimple.plot.bar);
        core.filter(bar, $scope.data, $attrs.field, $attrs.value, $attrs.filter);
        graphController.draw();
      }



      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addBar();
        }
      });
    }
  };
}]);