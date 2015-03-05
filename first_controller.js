var demoApp = angular.module("demoApp", []);

demoApp.controller('FirstController', function($scope) {
		$scope.message = "HI THERE CLASS!"
    $scope.animals = [
        {name: "Charlie", species: "dog"},
        {name: "Loser", species: "cat"},
        {name: "Buck", species: "dog"},
        {name: "Lucy", species: "dog"},
        {name: "Vomit", species: "cat"}
      ]
    $scope.greet = function(animal){
      if (animal.species == "dog") {
        return "Hi my name is " + animal.name + ". I'm a dog!!! I love you!!"
      } else {
        return "Fuck off I'm a cat"
      }
    }
});
