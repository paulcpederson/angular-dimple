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
    templateUrl: '../partials/line-graph.html',
    controller: 'lineGraphController'
  })
  .when('/stacked-area', {
    templateUrl: '../partials/stacked-area.html',
    controller: 'stackedAreaController'
  })
  .when('/area', {
    templateUrl: '../documentation/partials/area.html',
    controller: 'areaController'
  })
  .when('/expanded-stacked-area', {
    templateUrl: '../partials/expanded-stacked-area.html',
    controller: 'expandedAreaController'
  })
  .when('/bar', {
    templateUrl: '../partials/bar-graph.html',
    controller: 'barController'
  })
  .when('/stacked-bar', {
    templateUrl: '../partials/stacked-bar-graph.html',
    controller: 'stackedBarController'
  })
  .when('/scatter-plot', {
    templateUrl: '../partials/scatter-plot.html',
    controller: 'scatterController'
  })

  .otherwise({
    redirectTo: '/line-graph'
  });

  $logProvider.debugEnabled(true);

}]);
