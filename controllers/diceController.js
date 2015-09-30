portlandiaMonopoly.controller("DiceCtrl", function DiceCtrl($scope, GameFactory) {
  $scope.diceRoll = function() {
    return Math.floor((Math.random()*6)+1);
  }
});
