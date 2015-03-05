demoApp.controller('CurrencyController', function($scope) {
  $scope.dollars = 0;
  $scope.isError = false;

  $scope.$watch('euros', function(newValue, oldValue) {
    $scope.isError = isNaN(newValue);
  });

  $scope.convert = function() {
    $scope.dollars = $scope.euros * 1.1;
  };
});
