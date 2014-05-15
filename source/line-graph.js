console.log('changed');

angular.module('angular-dimple.line-graph', [])

.directive('dngLineGraph', [function () {
  return {
    restrict: 'E',
    template: '<div class="dng-line-graph" id="line-graph"></div>',
    replace: true,
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      var svg = dimple.newSvg('#line-graph', '100%', '100%');

      d3.tsv($attrs.data, function (data) {
        var chart = new dimple.chart(svg, data);
        var x = chart.addCategoryAxis("x", "Month");
        x.addOrderRule("Date");
        chart.addMeasureAxis("y", "Unit Sales");
        var s = chart.addSeries(null, dimple.plot.line);
        chart.draw();
      });
    }]
  };
}]);