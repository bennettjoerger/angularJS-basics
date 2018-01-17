var myApp = angular.module('myApp', []);



myApp.controller('mainController', ['$scope','$filter','$timeout', function($scope, $filter, $timeout){

  $scope.name = "";

  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.name);
  };

$scope.$watch('name', function(newValue, oldValue){

  console.info('Changed!')
  console.log('Old: ' + oldValue);
  console.log('New: ' + newValue);
  });

  setTimeout(function(){

    $scope.$apply(function(){
      $scope.name = 'newtwitterhandle';
      console.log('Scope changed!');
    });

  },3000);

}]);
