var demoApp = angular.module("demoApp", []);

demoApp.controller('FirstController', function($scope) {
  $scope.message = "I like Momo";
  $scope.dogs = ['Rusty', 'Momo'];

  $scope.sayHi = function() {
    return "Hi there.";
  };
});
