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

      function addRing () {
        ring = chart.addSeries([$attrs.field], dimple.plot.pie);
        if ($attrs.stroke) {
          var stroke = (100 - $attrs.stroke) + '%';
          ring.innerRadius = stroke;
          console.log(stroke);
        } else {
          ring.innerRadius = "50%";
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

