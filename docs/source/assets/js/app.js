angular.module('myApp', [
  'angular-dimple',
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])

.config(['$routeProvider', '$logProvider', function($routeProvider, $logProvider) {
  $routeProvider

  .when('/animation-test', {
    templateUrl: '/angular-dimple/examples/partials/animation-test.html',
    controller: 'testController'
  })
  .when('/line-graph', {
    templateUrl: '/angular-dimple/examples/partials/line-graph/index.html',
    controller: 'lineGraphController'
  })
  .when('/stacked-area', {
    templateUrl: '/angular-dimple/examples/partials/stacked-area/index.html',
    controller: 'stackedAreaController'
  })
  .when('/area', {
    templateUrl: '/angular-dimple/examples/partials/area/index.html',
    controller: 'areaController'
  })
  .when('/expanded-stacked-area', {
    templateUrl: '/angular-dimple/examples/partials/expanded-stacked-area/index.html',
    controller: 'expandedAreaController'
  })
  .when('/bar', {
    templateUrl: '/angular-dimple/examples/partials/bar-graph/index.html',
    controller: 'barController'
  })
  .when('/stacked-bar', {
    templateUrl: '/angular-dimple/examples/partials/stacked-bar-graph/index.html',
    controller: 'stackedBarController'
  })
  .when('/scatter-plot', {
    templateUrl: '/angular-dimple/examples/partials/scatter-plot/index.html',
    controller: 'scatterController'
  })
  .when('/ring', {
    templateUrl: '/angular-dimple/examples/partials/ring/index.html',
    controller: 'ringController'
  })
  .otherwise({
    redirectTo: '/line-graph'
  });

  $logProvider.debugEnabled(true);

}]);
