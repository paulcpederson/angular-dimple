angular.module('angular-dimple.graph', [])

.directive('graph', [function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      data: '=',
    },
    require: ['graph'],
    transclude: true,
    link: function (scope, element, attrs, controllers, transclude) {
      var graphController = controllers[0];
      graphController._createChart();
      scope.dataReady = false;
      scope.filters = [];

      var chart = graphController.getChart();
      var transition;
      if (attrs.transition) {
        transition = attrs.transition;
      } else {
        transition = 750;
      }

      scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          scope.dataReady = true;
          graphController.setData();
          chart.draw(transition);
        }
      });

      transclude(scope, function(clone){
        element.append(clone);
      });
    },
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      var chart;

      this._createChart = function () {
        // create an svg element
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        if ($attrs.width) {
          svg.setAttribute('width', $attrs.width);
        } else {
          svg.setAttribute('width', '100%');
        }
        if ($attrs.height) {
          svg.setAttribute('height', $attrs.height);
        } else {
          svg.setAttribute('height', '100%');
        }

        // end the svg to this <graph>
        $element.append(svg);

        // create the dimple chart using the d3 selection of our <svg> element
        chart = new dimple.chart(d3.select(svg));

        if ($attrs.margin) {
          chart.setMargins($attrs.margin);
        } else {
          chart.setMargins(60, 60, 20, 40);
        }

        // auto style
        var autoStyle = $attrs.autoStyle === 'false' ? true : false;
        chart.noFormats = autoStyle;
      };

      this.getChart = function () {
        return chart;
      };

      this.setData = function () {
        chart.data = $scope.data;
      };

      this.draw = function () {
        chart.draw();
      };

      this.getID = function () {
        return id;
      };

      this.filter = function (attrs) {
        if (attrs.value !== undefined) {
          $scope.filters.push(attrs.value);
        }
        if ($scope.filters.length) {
          chart.data = dimple.filterData($scope.data, attrs.field, $scope.filters);
        }

        if (attrs.filter !== undefined) {
          console.log("i see a filter");
          var thisFilter = attrs.filter.split(':');
          var field = thisFilter[0];
          var value = [thisFilter[1]];
          chart.data = dimple.filterData($scope.data, field, value);
        }
      };

    }]
  };
}]);