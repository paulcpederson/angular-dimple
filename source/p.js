angular.module('angular-dimple.p', [])

.directive('p', [function () {
  return {
    restrict: 'E',
    replace: true,
    require: ['p', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var chart = graphController.getChart();

      function addAxis () {
        p = chart.addMeasureAxis('p', $attrs.field);

        if ($attrs.title && $attrs.title !== "null") {
          p.title = $attrs.title;
        } else if ($attrs.title == "null") {
          p.title = null;
        }
      }
      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addAxis();
        }
      });
    }
  };
}]);