var myApp = angular.module('myApp', []);



myApp.controller('mainController', ['$scope','$filter','$timeout', function($scope, $filter, $timeout){

  $scope.name = "";

  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.name);

  };


}]
