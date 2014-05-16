/*! Angular-Dimple - 0.0.0 - 2014-05-16
*   https://github.com/geoloqi/angular-dimple
*   Licensed ISC */
angular.module('angular-dimple', [
  'angular-dimple.line-graph',
  'angular-dimple.x',
  'angular-dimple.line',
])

.constant('MODULE_VERSION', '0.0.1')

.value('defaults', {
  foo: 'bar'
});
angular.module('angular-dimple.line-graph', [])

.directive('lineGraph', [function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      data: '='
    },
    require: ['lineGraph'],
    transclude: true,
    compile: function($element, $attrs) {
      $element.append('<div class="dimple-line-graph" id="line-graph"></div>');
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
      var svg = dimple.newSvg('#line-graph', $attrs.width, $attrs.height);
      chart = new dimple.chart(svg);

      this.getChart = function () {
        return chart;
      };

      this.setData = function () {
        chart.data = $scope.data;
        y = chart.addMeasureAxis('y', 'Unit Sales');
      };

      this.draw = function () {
        chart.draw();
      };

    }]
  };
}]);
angular.module('angular-dimple.line', [])

.directive('line', [function () {
  return {
    restrict: 'E',
    replace: true,
    require: ['line', '^lineGraph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var lineController = $controllers[0];
      var chart = graphController.getChart();

      function addLine () {
        var filteredData;
        line = chart.addSeries([$attrs.field], dimple.plot.line);
        if ($scope.data !== null && $attrs.value !== undefined) {
          filteredData = dimple.filterData($scope.data, $attrs.field, [$attrs.value]);
          line.data = filteredData;
        }
        line.lineMarkers = true;
        graphController.draw();
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addLine();
        }
      });
    }
  };
}]);
angular.module('angular-dimple.x', [])

.directive('x', [function () {
  return {
    restrict: 'E',
    replace: true,
    require: ['x', '^lineGraph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var chart = graphController.getChart();

      function addAxis () {
        if ($attrs.type == 'Measure') {
          x = chart.addMeasureAxis('x', $attrs.field);
        } else {
          x = chart.addCategoryAxis('x', $attrs.field);
        }

        if ($attrs.orderBy) {
          x.addOrderRule($attrs.orderBy);
        }

        if ($attrs.title && $attrs.title !== "null") {
          x.title = $attrs.title;
        } else if ($attrs.title == "null") {
          x.title = null;
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