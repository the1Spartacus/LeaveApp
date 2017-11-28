'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:UiModalsCtrl
 * @description
 * # UiModalsCtrl
 * Controller of the minovateApp
 */
app
  .controller('ModalsCtrl', function ($scope) {
    $scope.page = {
      title: 'Modals',
      subtitle: 'Place subtitle here...'
    };
  })

  .controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function(size) {

      var modalInstance = $uibModal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  })

  // Please note that $modalInstance represents a modal window (instance) dependency.
  // It is not the same as the $modal service used above.

//  .controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {
//
//    $scope.items = items;
//   
//
//    $scope.ok = function () {
//      $uibModalInstance.close($scope.selected.item);
//    };
//
//    $scope.cancel = function () {
//      $uibModalInstance.dismiss('cancel');
//    };
//  })
  .controller('ModalInstanceCtrl',['$uibModalInstance','$scope','$state','$rootScope','Leave', function ($uibModalInstance,$scope,$state,$rootScope,Leave) {
    
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
//          $state.go('app.dashboard');
          $uibModalInstance.close();
        });
    };
      
        });
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    
  }])

  .controller('SplashDemoCtrl', function ($scope, $uibModal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.openSplash = function(event, size) {

      var options = angular.element(event.target).data('options');

      var modalInstance = $uibModal.open({
        templateUrl: 'mySplashContent.html',  
        controller: 'ModalInstanceCtrl',
        size: size,
        backdropClass: 'splash' + ' ' + options,
        windowClass: 'splash' + ' ' + options,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  })
  .controller('SplashDemoCtrls', function ($scope, $uibModal, $log) {
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.openSplash = function(event, size) {

      var options = angular.element(event.target).data('options');

      var modalInstance = $uibModal.open({
        templateUrl: 'mySplashContents.html', 
        controller: 'ModalInstanceCtrl',
        size: size,
        backdropClass: 'splash' + ' ' + options,
        windowClass: 'splash' + ' ' + options,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });

