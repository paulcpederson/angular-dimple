angular.module('angular-dimple.line-graph', [])

.directive('lineGraph', [function () {
  return {
    restrict: 'E',
    template: '<div class="dimple-line-graph" id="line-graph"></div>',
    replace: true,
    scope: {
      data:'='
    },
    require: ['lineGraph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      var chart, x, s;
      var svg = dimple.newSvg('#line-graph', '100%', '100%');
      chart = new dimple.chart(svg);

      this.updateData = function () {
        chart.data = $scope.data;
        x = chart.addCategoryAxis('x', 'Month');
        x.addOrderRule('Date');
        chart.addMeasureAxis('y', 'Unit Sales');
        s = chart.addSeries(null, dimple.plot.line);
        chart.draw();
      };
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[0];
      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          graphController.updateData();
        }
      });
    }
  };
}]);