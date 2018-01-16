var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource){
  console.log($scope);
  console.log($log);
  $log.log("hello");
  $log.warn("warning");
  $log.debug("debug");
  $log.error("error");

  $scope.name = 'Bennett';
  $scope.formattedName = $filter('uppercase')($scope.name);

  $log.info($scope.name);
  $log.info($scope.formattedName);

})
