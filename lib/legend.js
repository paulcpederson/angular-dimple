angular.module('angular-dimple.legend', [])

.directive('legend', [function () {
  return {
    restrict: 'E',
    replace: true,
    require: ['legend', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var chart = graphController.getChart();

      function addLegend () {
        var left = $attrs.left ? $attrs.left : "10%";
        var top = $attrs.top ? $attrs.top : "4%";
        var height = $attrs.height ? $attrs.height : "10%";
        var width = $attrs.width ? $attrs.width : "90%";
        var position = $attrs.position ? $attrs.position : 'left';
        chart.addLegend(left, top, width, height, position);
      }

      $scope.$watch('dataReady', function(newValue, oldValue) {
        if (newValue === true) {
          addLegend();
        }
      });
    }
  };
}]);