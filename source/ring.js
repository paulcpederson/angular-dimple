angular.module('angular-dimple.ring', [])

.directive('ring', ['angular-dimple.core', function (core) {
  return {
    restrict: 'E',
    replace: true,
    require: ['ring', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var areaController = $controllers[0];
      var chart = graphController.getChart();

      function setData (data, series) {
        series.data = data;
      }

      function addRing () {
        var width;
        ring = chart.addSeries([$attrs.field], dimple.plot.pie);
        if ($attrs.thickness && !$attrs.radius) {
          width = (100 - $attrs.thickness) + '%';
          ring.innerRadius = width;
          console.log(width);
        } else if ($attrs.thickness && $attrs.radius) {
          width = ($attrs.radius - $attrs.thickness) + '%';
          ring.innerRadius = width;
        } else {
          ring.innerRadius = "50%";
        }

        if ($attrs.radius) {
          ring.outerRadius = ($attrs.radius) + '%';
        }

        graphController.draw();
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addRing();
        }
      });
    }
  };
}]);

