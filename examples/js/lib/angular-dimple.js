/*! Angular-Dimple - 0.0.0 - 2014-05-14
*   https://github.com/geoloqi/angular-dimple
*   Licensed ISC */
angular.module('angular-dimple', [
  'angular-dimple.line-graph'
])

.constant('MODULE_VERSION', '0.0.1')

.value('defaults', {
  foo: 'bar'
});
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