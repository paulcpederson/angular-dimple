angular.module('angular-dimple', [
  'angular-dimple.core',
  'angular-dimple.graph',
  'angular-dimple.x',
  'angular-dimple.y',
  'angular-dimple.line',
  'angular-dimple.bar',
  'angular-dimple.stacked-bar',
  'angular-dimple.area',
  'angular-dimple.stacked-area',
  'angular-dimple.scatter-plot'
])

.constant('MODULE_VERSION', '0.0.1')

.value('defaults', {
  foo: 'bar'
});