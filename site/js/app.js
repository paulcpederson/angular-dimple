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

  .when('/line-graph', {
    templateUrl: '../documentation/partials/line-graph.html',
    controller: 'lineGraphController'
  })
  .when('/stacked-area', {
    templateUrl: '../documentation/partials/stacked-area.html',
    controller: 'stackedAreaController'
  })
  .when('/area', {
    templateUrl: '../documentation/partials/area.html',
    controller: 'areaController'
  })
  .when('/expanded-stacked-area', {
    templateUrl: '../documentation/partials/expanded-stacked-area.html',
    controller: 'expandedAreaController'
  })
  .when('/bar', {
    templateUrl: '../documentation/partials/bar-graph.html',
    controller: 'barController'
  })
  .when('/stacked-bar', {
    templateUrl: '../documentation/partials/stacked-bar-graph.html',
    controller: 'stackedBarController'
  })
  .when('/scatter-plot', {
    templateUrl: '../documentation/partials/scatter-plot.html',
    controller: 'scatterController'
  })
  .when('/ring', {
    templateUrl: '../documentation/partials/ring.html',
    controller: 'ringController'
  })

  .otherwise({
    redirectTo: '/line-graph'
  });

  $logProvider.debugEnabled(true);

}]);
