angular.module('angular-dimple.core', [])

.service('angular-dimple.core', [function(){
  return {
    filter: function (chart, attrs, scopeData) {
      if (scopeData !== null) {
        var data = filterData(scopeData);
        chart.data = data;
        if (attrs.value !== undefined) {
          chart.data = dimple.filterData(data, attrs.field, [attrs.value]);
        }
      }
      function filterData (d) {
        if (attrs.filter) {
          var filter = attrs.filter.split(':');
          return dimple.filterData(d, filter[0], [filter[1]]);
        } else {
          return d;
        }
      }
    }
  };
}]);

