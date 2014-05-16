angular.module('angular-dimple', [
  'angular-dimple.line-graph',
  'angular-dimple.line'
])

.constant('MODULE_VERSION', '0.0.1')

.value('defaults', {
  foo: 'bar'
});