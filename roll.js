var module = angular.module("diceRoller", []);

module.controller("rollerController", ["$scope", function($scope){

    $scope.dice = [];
    $scope.rollInputs =[];
    $scope.rollTotal = 0;

    function die(sides){
        this.maxValue = sides;
        this.value = 0;

        this.roll = function(){
            var randomNo = Math.random();
            this.value = Math.ceil(randomNo*sides);
        };
    };

    $scope.rollADie = function(times, sides){
        for (var i = 0; i < times; i++) {
            var rollingDie = new die(sides);
            rollingDie.roll();
            $scope.dice.push(rollingDie);
        };
    };

    function Option(){
        var sides = 10;
        var rolls = 10;

        setSides = function(inSides){
            sides = inSides;
            return sides;
        };

        setSides = setSides();

        getSides = function(){
            return sides;
        };

        getSides = getSides();

        setRolls = function(inRolls){
            rolls = inRolls;
            return rolls;
        };

        setRolls = setRolls();
        
        getRolls = function(){
            return rolls;
        };

        getRolls = getRolls();

        remove = function(){
            console.log("removing");
        };
    };

    $scope.surpriseMe = function(){
        for (var i = 0; i < $scope.rollInputs.length; i++) {
            $scope.rollInputs[i].sides = Math.ceil(Math.pow(Math.ceil((Math.random()*5)), Math.ceil((Math.random()*3))));
            $scope.rollInputs[i].rolls = Math.ceil(Math.pow(Math.ceil((Math.random()*5)), Math.ceil((Math.random()*3))));
        };

        $scope.doRolls();
    };

    $scope.doRolls = function(){
        $scope.dice = [];
        for (var i = 0; i < $scope.rollInputs.length; i++) {
            $scope.rollADie($scope.rollInputs[i].rolls, $scope.rollInputs[i].sides);
        };
    };

    $scope.addMoreOptions = function(){
        $scope.rollInputs.push(new Option());
    };

    $scope.removeOption = function(){
        $scope.rollInputs.splice(this.$index,1 );
    };

    $scope.addMoreOptions();

}]);