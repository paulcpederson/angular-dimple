angular.module('angular-dimple', [
  'angular-dimple.graph',
  'angular-dimple.x',
  'angular-dimple.y',
  'angular-dimple.line',
  'angular-dimple.bar',
])

.constant('MODULE_VERSION', '0.0.1')

.value('defaults', {
  foo: 'bar'
});