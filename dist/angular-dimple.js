/*! Angular-Dimple - 0.0.0 - 2014-05-22
*   https://github.com/geoloqi/angular-dimple
*   Licensed ISC */
angular.module('angular-dimple.core', [])

.service('angular-dimple.core', [function(){
  return {
    filter: function (chart, attrs, scopeData) {
      if (scopeData !== null) {
        var data = filterData(scopeData);
        chart.data = data;
        if (attrs.value !== undefined) {
          chart.data = dimple.filterData(data, attrs.field, [attrs.value]);
        }
      }
      function filterData (d) {
        if (attrs.filter) {
          var filter = attrs.filter.split(':');
          return dimple.filterData(d, filter[0], [filter[1]]);
        } else {
          return d;
        }
      }
    }
  };
}]);


angular.module('angular-dimple', [
  'angular-dimple.core',
  'angular-dimple.graph',
  'angular-dimple.legend',
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
angular.module('angular-dimple.area', [])

.directive('area', ['angular-dimple.core', function (core) {
  return {
    restrict: 'E',
    replace: true,
    require: ['area', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var areaController = $controllers[0];
      var chart = graphController.getChart();

      function addArea () {
        area = chart.addSeries([$attrs.field], dimple.plot.area);
        core.filter(area, $attrs, $scope.data);
        area.lineMarkers = true;
        graphController.draw();

      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addArea();
        }
      });
    }
  };
}]);


angular.module('angular-dimple.bar', [])

.directive('bar', [function () {
  return {
    restrict: 'E',
    replace: true,
    require: ['bar', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var lineController = $controllers[0];
      var chart = graphController.getChart();

      function addBar () {
        var filteredData;
        bar = chart.addSeries([$attrs.field], dimple.plot.bar);
        if ($scope.data !== null && $attrs.value !== undefined) {
          filteredData = dimple.filterData($scope.data, $attrs.field, [$attrs.value]);
          bar.data = filteredData;
        }
        graphController.draw();
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addBar();
        }
      });
    }
  };
}]);
angular.module('angular-dimple.graph', [])

.directive('graph', [function () {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      data: '='
    },
    require: ['graph'],
    transclude: true,
    compile: function($element, $attrs) {
      var id = (Math.random() * 1e9).toString(36).replace(".", "_");
      $element.append('<div class="dimple-graph" id="dng-'+ id +'"></div>');
      return {
        post: function postLink(scope, element, attrs, controllers, transclude) {
          var graphController = controllers[0];
          graphController._createChart(id);
          scope.$watch('data', function(newValue, oldValue) {
            if (newValue) {
              graphController.setData();
            }
          });
          transclude(scope, function(clone){
            element.append(clone);
          });
        }
      };
    },
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      var chart;
      var id;

      this._createChart = function (domId) {
        id = domId;
        var svg = dimple.newSvg('#dng-'+ id +'', $attrs.width, $attrs.height);
        chart = new dimple.chart(svg);

        var autoStyle = $attrs.autoStyle === 'false' ? true : false;
        chart.noFormats = autoStyle;
      };

      this.getChart = function () {
        return chart;
      };

      this.setData = function () {
        chart.data = $scope.data;
      };

      this.draw = function () {
        chart.draw();
      };

      this.getID = function () {
        return id;
      };

    }]
  };
}]);
angular.module('angular-dimple.legend', [])

.directive('legend', [function () {
  return {
    restrict: 'E',
    replace: true,
    require: ['legend', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var chart = graphController.getChart();

      function addLegend () {
        var left = $attrs.left ? $attrs.left : "10%";
        var top = $attrs.top ? $attrs.top : "4%";
        var height = $attrs.height ? $attrs.height : "10%";
        var width = $attrs.width ? $attrs.width : "90%";
        var position = $attrs.position ? $attrs.position : 'left';
        chart.addLegend(left, top, width, height, position);
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addLegend();
        }
      });
    }
  };
}]);
angular.module('angular-dimple.line', [])

.directive('line', ['angular-dimple.core', function (core) {
  return {
    restrict: 'E',
    replace: true,
    require: ['line', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var lineController = $controllers[0];
      var chart = graphController.getChart();

      function addLine () {
        var filteredData;
        line = chart.addSeries([$attrs.field], dimple.plot.line);
        core.filter(line, $attrs, $scope.data);
        line.lineMarkers = true;
        graphController.draw();
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addLine();
        }
      });
    }
  };
}]);
angular.module('angular-dimple.scatter-plot', [])

.directive('scatterPlot', ['angular-dimple.core', function (core) {
  return {
    restrict: 'E',
    replace: true,
    require: ['scatterPlot', '^graph'],
    controller: [function() {}],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var chart = graphController.getChart();

      function addScatterPlot () {
        scatterPlot = chart.addSeries([$attrs.series, $attrs.field], dimple.plot.bubble);
        core.filter(scatterPlot, $attrs, $scope.data);
        graphController.draw();
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addScatterPlot();
        }
      });
    }
  };
}]);
angular.module('angular-dimple.stacked-area', [])

.directive('stackedArea', ['angular-dimple.core', function (core) {
  return {
    restrict: 'E',
    replace: true,
    require: ['stackedArea', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var areaController = $controllers[0];
      var chart = graphController.getChart();

      function addArea () {
        if ($attrs.series) {
          area = chart.addSeries([$attrs.series], dimple.plot.area);
        } else {
          area = chart.addSeries([$attrs.field], dimple.plot.area);
        }
        core.filter(area, $attrs, $scope.data);
        area.lineMarkers = false;
        graphController.draw();
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addArea();
        }
      });
    }
  };
}]);
angular.module('angular-dimple.stacked-bar', [])

.directive('stackedBar', ['angular-dimple.core', function (core) {
  return {
    restrict: 'E',
    replace: true,
    require: ['stackedBar', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var lineController = $controllers[0];
      var chart = graphController.getChart();

      function addBar () {
        if ($attrs.series) {
          bar = chart.addSeries([$attrs.series], dimple.plot.bar);
        } else {
          bar = chart.addSeries([$attrs.field], dimple.plot.bar);
        }

        core.filter(bar, $attrs, $scope.data);
        graphController.draw();
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addBar();
        }
      });
    }
  };
}]);
angular.module('angular-dimple.x', [])

.directive('x', [function () {
  return {
    restrict: 'E',
    replace: true,
    require: ['x', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var chart = graphController.getChart();

      function addAxis () {
        if ($attrs.groupBy) {
          if ($attrs.type == 'Measure') {
            x = chart.addMeasureAxis('x', [$attrs.groupBy, $attrs.field]);
          } else if ($attrs.type == 'Percent') {
            x = chart.addPctAxis('x', $attrs.field);
          } else {
            x = chart.addCategoryAxis('x', [$attrs.groupBy, $attrs.field]);
          }
          if ($attrs.orderBy) {
            x.addGroupOrderRule($attrs.orderBy);
          }

        } else {
          if ($attrs.type == 'Measure') {
            x = chart.addMeasureAxis('x', $attrs.field);
          } else if ($attrs.type == 'Percent') {
            x = chart.addPctAxis('x', $attrs.field);
          } else {
            x = chart.addCategoryAxis('x', $attrs.field);
          }
          if ($attrs.orderBy) {
            x.addOrderRule($attrs.orderBy);
          }
        }

        if ($attrs.title && $attrs.title !== "null") {
          x.title = $attrs.title;
        } else if ($attrs.title == "null") {
          x.title = null;
        }
      }
      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addAxis();
        }
      });
    }
  };
}]);
angular.module('angular-dimple.y', [])

.directive('y', [function () {
  return {
    restrict: 'E',
    replace: true,
    require: ['y', '^graph'],
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
    }],
    link: function($scope, $element, $attrs, $controllers) {
      var graphController = $controllers[1];
      var chart = graphController.getChart();

      function addAxis () {
        if ($attrs.groupBy) {
          if ($attrs.type == 'Category') {
            y = chart.addCategoryAxis('y', $attrs.field);
          } else if ($attrs.type == 'Percent') {
            y = chart.addPctAxis('y', $attrs.field);
          } else {
            y = chart.addMeasureAxis('y', $attrs.field);
          }
          if ($attrs.orderBy) {
            y.addGroupOrderRule($attrs.orderBy);
          }
        } else {
          if ($attrs.type == 'Category') {
            y = chart.addCategoryAxis('y', $attrs.field);
          } else if ($attrs.type == 'Percent') {
            y = chart.addPctAxis('y', $attrs.field);
          } else {
            y = chart.addMeasureAxis('y', $attrs.field);
          }
          if ($attrs.orderBy) {
            y.addOrderRule($attrs.orderBy);
          }
        }

        if ($attrs.title && $attrs.title !== "null") {
          y.title = $attrs.title;
        } else if ($attrs.title == "null") {
          y.title = null;
        }
      }

      $scope.$watch('data', function(newValue, oldValue) {
        if (newValue) {
          addAxis();
        }
      });
    }
  };
}]);