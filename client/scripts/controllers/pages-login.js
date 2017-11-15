'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the minovateApp
 */
app
  .controller('LoginCtrl',['$scope','$state','$rootScope','Employee', function ($scope, $state,$rootScope, Employee) {
      
        $scope.login = function() {
      return Employee
        .login({
          email: $scope.user.email, 
          password: $scope.user.password
      }).$promise
        .then(function() {
            $state.go('app.dashboard');
        })
    };
      

  }]);

          