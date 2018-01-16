var myApp = angular.module('myApp', []);



myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){

  $scope.name = "Nah";

  $timeout(function(){

    $scope.name = "Bennett";
  }, 3000);
}]);
