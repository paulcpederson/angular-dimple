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
        ring = chart.addSeries([$attrs.field], dimple.plot.pie);
        if ($attrs.width && !$attrs.radius) {
          var width = (100 - $attrs.width) + '%';
          ring.innerRadius = width;
          console.log(width);
        } else if ($attrs.width && $attrs.radius) {
          var width = ($attrs.radius - $attrs.width) + '%';
          ring.innerRadius = width;
        } else {
          ring.innerRadius = "50%";
        }

        if ($attrs.radius) {
          ring.outerRadius = ($attrs.radius) + '%';
        }


        // ring.innerRadius = "50%";
        // core.filter(ring, $scope.data, $attrs.field, $attrs.value, $attrs.filter);
        // ring.lineMarkers = true;

        // if ($attrs.value) {
        //   ring = chart.addSeries([$attrs.field], dimple.plot.pie);
        //   core.filter(ring, $scope.data, $attrs.field, $attrs.value, $attrs.filter);
        //   ring.lineMarkers = true;
        // } else {
        //   var values = dimple.getUniqueValues($scope.data, $attrs.field);
        //   angular.forEach(values, function(value){
        //     ring = chart.addSeries([$attrs.field], dimple.plot.pie);
        //     core.filter(ring, $scope.data, $attrs.field, value, $attrs.filter);
        //     ring.lineMarkers = true;
        //   });
        // }
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

