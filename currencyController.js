
demoApp.controller('CurrencyController', function($scope) {
  $scope.convert = function(){
    $scope.dollars = $scope.euros * 1.24;
  }

  $scope.$watch('euros', function(newVal, oldVal) {
    $scope.error = isNaN(newVal);
  });
});
