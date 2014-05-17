angular.module('angular-dimple.bar-graph', [])

.directive('barGraph', [function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      data: '='
    },
    require: ['barGraph'],
    transclude: true,
    compile: function($element, $attrs) {
      $element.append('<div class="dimple-bar-graph" id="bar-graph"></div>');
      return {
        post: function postLink($scope, $element, $attrs, $controllers, transclude) {
          var graphController = $controllers[0];
          $scope.$watch('data', function(newValue, oldValue) {
            if (newValue) {
              graphController.setData();
            }
          });
          transclude($scope, function(clone){
            $element.append(clone);
          });
        }
      };
    },
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      var chart, x, s;
      var svg = dimple.newSvg('#bar-graph', $attrs.width, $attrs.height);
      chart = new dimple.chart(svg);

      this.getChart = function () {
        return chart;
      };

      this.setData = function () {
        chart.data = $scope.data;
        y = chart.addMeasureAxis('y', 'Unit Sales');
        x = chart.addCategoryAxis('x', 'Month');
        x.addOrderRule('Date');
      };

      this.draw = function () {
        chart.draw();
      };

    }]
  };
}]);