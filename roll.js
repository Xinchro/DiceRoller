var module = angular.module("roller", []);

module.controller("rollerController", ["$scope", function($scope){

    $scope.dice = [];
    $scope.rollTotal = 0;
    $scope.rollsIn = 200;

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
        // console.log("rolling 2d4");
        // $scope.rollADie(2, 4);
        // console.log("rolling 1d2");
        // $scope.rollADie(1, 2);
        // console.log("rolling 2d3");
        // $scope.rollADie(2, 3);
        // console.log("rolling 2d12");
        // $scope.rollADie(2, 12);
        $scope.rollADie($scope.rollsIn, 12);
    }

    // $scope.doRolls();
}]);