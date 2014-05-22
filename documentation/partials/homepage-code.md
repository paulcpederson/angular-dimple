Top Tabbed Code Sample:

```html
<graph data="graphData" height="400">
  <x field="Month" order-by="Date"></x>
  <y field="Unit Sales"></y>
  <legend></legend>
  <line field="Owner" value="Aperture"></line>
</graph>
```

index.html:

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="http://d3js.org/d3.v3.min.js"></script>
    <script src="http://dimplejs.org/dist/dimple.v2.0.0.min.js"></script>
  </head>
  <body ng-app="myApp">
    <div ng-controller="myController">
      <graph data="graphData">
        <x field="Month" order-by="Date"></x>
        <y field="Unit Sales"></y>
        <line field="Owner" value="Aperture"></line>
      </graph>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0-beta.8/angular.min.js"></script>
    <script src="angular-dimple.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

app.js

```js
angular.module('myApp', [
  'angular-dimple'
])

.controller('myController', ['$scope', 'dataService', function($scope, dataService) {
  dataService.getData().then(function(response) {
    $scope.graphData = response.data;
  });
}])

.service('dataService', ['$http', function($http) {
  return {
    getData: function() {
      return $http.get('data.json');
    }
  };
}]);
```

data.json

```json
[
  {
    "Date": "01\/01\/2011",
    "Month": "Jan-11",
    "Owner": "Aperture",
    "Unit Sales": "1765"
  },
  {
    "Date": "02\/01\/2011",
    "Month": "Jan-11",
    "Owner": "Aperture",
    "Unit Sales": "1899"
  },
  {
    "Date": "02\/01\/2011",
    "Month": "Jan-11",
    "Owner": "Aperture",
    "Unit Sales": "1565"
  }
]
```

