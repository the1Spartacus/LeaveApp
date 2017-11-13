'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesSignupCtrl
 * @description
 * # PagesSignupCtrl
 * Controller of the minovateApp
 */
app
  .controller('SignupCtrl', ['$scope','$state','Employee', function ($scope,$state,Employee) {
          
      //Create a new user
                $scope.register = function() {
                 Employee
                   .create({
                      name: $scope.user.name,
                      surname: $scope.user.surname,
                      position: $scope.user.position,
                      cell_number: $scope.user.cell_number,
                      email: $scope.user.email,
                      password: $scope.user.password
                }).then(function(){
                //location go to view company page
                  $state.go('core.login');
                 });
            };
  }]);
