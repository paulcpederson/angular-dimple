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
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[0];
      var chart = graphController.getChart();
    },
    compile: function($element, $attrs) {
      var id = (Math.random() * 1e9).toString(36).replace(".", "_");
      $element.append('<div class="dimple-graph" id="dng-'+ id +'"></div>');
      return {
        post: function postLink(scope, element, attrs, controllers, transclude) {
          var graphController = controllers[0];
          graphController._createChart(id);
          scope.dataReady = false;

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
        }
      };
    },
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      var chart;
      var id;

      this._createChart = function (domId) {
        id = domId;
        var svg = dimple.newSvg('#dng-'+ id +'', $attrs.width, $attrs.height);
        var data = $scope.data;
        chart = new dimple.chart(svg, data);
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
    }]
  };
}]);