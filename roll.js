var module = angular.module("diceRoller", []);

module.controller("rollerController", ["$scope", function($scope){

    $scope.dice = [];
    $scope.inputs =[];
    $scope.rollTotal = 0;
    // $scope.rollsIn = 200;
    // $scope.dieSides = 12;

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

    $scope.option = function(){
        this.sides = 10;
        this.rolls = 10;
    }

    $scope.surpriseMe = function(){
        // $scope.rollsIn = Math.ceil(Math.pow(Math.ceil((Math.random()*5)), Math.ceil((Math.random()*3))));
        // $scope.dieSides = Math.ceil(Math.pow(Math.ceil((Math.random()*5)), Math.ceil((Math.random()*3))));

        $scope.inputs[0].sides = 2;
        $scope.inputs[0].rolls = 2;

        $scope.doRolls();
    }

    $scope.doRolls = function(){
        $scope.dice = [];
        for (var i = $scope.inputs.length - 1; i >= 0; i--) {
            $scope.rollADie($scope.inputs[i].rolls, $scope.inputs[i].sides);
        };
    }

    $scope.addMoreOptions = function(){
        $scope.inputs.push(new Option());
    }

    $scope.inputs.push(new Option());

}]);