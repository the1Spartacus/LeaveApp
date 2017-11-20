'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:FormsCommonCtrl
 * @description
 * # FormsCommonCtrl
 * Controller of the minovateApp
 */
app
  .controller('FormsCommonCtrl',['$scope','$state','$rootScope','Leave', function ($scope,$state,$rootScope,Leave) {
    
      //leave types in an array 
        $scope.arrayleaves = ["Annual Leave", "Maternity Leave", "Sick Leave","Family Responsibility Leave","Study Leave","Leave for religious holidays","Unpaid leave"];
    
    
      
      
        $scope.$watch('currentUser.id', function(value) {
          if (!value) {
            return;
          }
        //function to apply/create leave
       $scope.applyLeave = function() {
      Leave
        .create({
          leave_type: $scope.leave,
          num_of_work_days: $scope.days,
          start: $scope.fromDate,
          end: $scope.toDate,
          applied_date: new Date(),
          employeeId: $rootScope.currentUser.id
       }).$promise
        .then(function() {
          //location go to view company page
          $state.go('app.dashboard');
        });
    };
      
        });
    
  }]);
