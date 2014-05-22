angular.module('angular-dimple.core', [])

.service('angular-dimple.core', [function(){
  return {
    filter: function (chart, scopeData, field, value, filter) {
      if (scopeData !== null) {
        var data = this.filterData(scopeData, filter);
        chart.data = data;
        if (value !== undefined) {
          chart.data = dimple.filterData(data, field, [value]);
        }
      }
    },
    filterData: function (data, filter) {
      if (filter) {
        var filters = filter.split(':');
        return dimple.filterData(data, filters[0], [filters[1]]);
      } else {
        return data;
      }
    }
  };
}]);

