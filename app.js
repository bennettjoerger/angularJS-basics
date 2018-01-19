var myApp = angular.module('myApp', []);



myApp.controller('mainController', ['$scope','$filter', function($scope, $filter){

  $scope.name = "";

  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.name);
  };

  $scope.characters = 5;

  var rulesRequest = new XLMHttpRequest();
  rulesRequest.onreadystatechange = function(){
    if(rulesRequest.readyState == 4 && rulesRequest.status == 200) {
      $scope.rules = JSON.parse(rulesRequest.responseText);
    }
  }

  rulesRequest.open("GET", "http://localhost:", true);
  rulesRequest.send();
  
}]);
