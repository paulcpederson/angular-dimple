angular.module('angular-dimple.tester', [])

.directive('tester', [function () {
  return {
    restrict: 'E',
    require: ['tester'],
    replace: true,
    controller: ['$scope', '$element', '$attrs', function($scope, $element, $attrs) {
      console.log('i am the tester');
    }],

    compile: function($element, $attrs){
      $element.append("<div id='tester'></div>");
      return function postLink() {
        $scope.$watch('graphData', function(newVal, oldVal){
          if(newVal!=oldVal) {
            $scope.$emit('subtester', graphData);
          }
        });
      };
    }
  };
}]);