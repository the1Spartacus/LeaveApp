'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the minovateApp
 */
app
  .controller('LoginCtrl', function ($scope, $state) {
    $scope.login = function() {
        if($scope.user.email == "thulani@thulani.com" && $scope.user.password == "thulani"){
            $state.go('app.dashboard');
        }
      
    };
  });
