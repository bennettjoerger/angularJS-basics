var myApp = angular.module('myApp', []);



myApp.controller('mainController', ['$scope','$filter', function($scope, $filter){

  $scope.name = "";

  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.name);
  };

  $scope.characters = 5;

  $scope.rules = [

    { rulename: "Must be 5 characters"},
    { rulename: "Must not be used elsewhere"},
    { rulename: "Must be cool"}

  ];

  $scope.alertClick = function(){

    alert("Warning!");
    console.log("This is working");
  }



}]);
