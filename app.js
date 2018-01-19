var myApp = angular.module('myApp', []);



myApp.controller('mainController', ['$scope','$filter', function($scope, $filter){

  $scope.name = "";

  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.name);
  };

  $scope.characters = 5;

  $scope.newRule = '';

  $scope.addRule = function(){
    $http.post('addressOfApi', {newRule: $scope.newRule})
      .success(function(result){
        $scope.rules = result;
        $scope.newRule = '';
      })
      error(function (data, status){
        console.log(data);
      })
  }

  $http.get('addressOfApi')
    .success(function(result){
      $scope.rules = result;
    })

    .error(function(data, status){
      console.log(data);
    })
}]);
