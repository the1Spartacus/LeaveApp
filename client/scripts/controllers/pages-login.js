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
        .then(function(response) {
             $rootScope.currentUser = {
             id: response.userId,
             tokenId: response.id,
             email: $scope.user.email
             };
        }).then(function(){
          $state.go('app.dashboard');
      });
    }
    
    function refresh(accessTokenId) {
      return Employee
        .getCurrent(function(userResource) {
          $rootScope.currentUser = {
            id: userResource.id,
            tokenId: accessTokenId,
            email: userResource.email
          };
        });
    };
      
  }]);

            