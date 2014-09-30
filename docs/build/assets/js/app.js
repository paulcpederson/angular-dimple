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
    templateUrl: '/examples/partials/animation-test.html',
    controller: 'testController'
  })


  .when('/line-graph', {
    templateUrl: '/examples/partials/line-graph/index.html',
    controller: 'lineGraphController'
  })
  .when('/stacked-area', {
    templateUrl: '/examples/partials/stacked-area/index.html',
    controller: 'stackedAreaController'
  })
  .when('/area', {
    templateUrl: '/examples/partials/area/index.html',
    controller: 'areaController'
  })
  .when('/expanded-stacked-area', {
    templateUrl: '/examples/partials/expanded-stacked-area/index.html',
    controller: 'expandedAreaController'
  })
  .when('/bar', {
    templateUrl: '/examples/partials/bar-graph/index.html',
    controller: 'barController'
  })
  .when('/stacked-bar', {
    templateUrl: '/examples/partials/stacked-bar-graph/index.html',
    controller: 'stackedBarController'
  })
  .when('/scatter-plot', {
    templateUrl: '/examples/partials/scatter-plot/index.html',
    controller: 'scatterController'
  })
  .when('/ring', {
    templateUrl: '/examples/partials/ring/index.html',
    controller: 'ringController'
  })

  .otherwise({
    redirectTo: '/line-graph'
  });

  $logProvider.debugEnabled(true);

}]);

