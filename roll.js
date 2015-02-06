var module = angular.module("roller", []);

module.controller("rollerController", ["$scope", function($scope){

    $scope.dice = [];
    $scope.rollTotal = 0;
    $scope.rollsIn = 200;
    $scope.dieSides = 12;

    $scope.die = function(sides){
        this.roll = function(){
            var randomNo = Math.random();
            this.value = Math.ceil(randomNo*sides);
        };
    };

    $scope.rollADie = function(times, sides){
        for (var i = times -1; i >= 0; i--) {
            var die = new $scope.die(sides);
            die.roll();
            $scope.dice.push(die);
        };
    }


    $scope.doRolls = function(){
        $scope.dice = [];
        $scope.rollADie($scope.rollsIn, $scope.dieSides);
    }

}]);