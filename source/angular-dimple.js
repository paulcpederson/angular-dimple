angular.module('angular-dimple', [
  'angular-dimple.line-graph',
  'angular-dimple.line',
  'angular-dimple.x-axis'
])

.constant('MODULE_VERSION', '0.0.1')

.value('defaults', {
  foo: 'bar'
});