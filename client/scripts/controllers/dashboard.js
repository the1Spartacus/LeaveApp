'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the minovateApp
 */
app
  .controller('DashboardCtrl', function($scope,$http){
    $scope.page = {
      title: 'Dashboard',
      subtitle: 'Place subtitle here...'
    };

    $scope.getUsers = function(){
      $scope.data=[];
      var url = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&delay=3&callback=JSON_CALLBACK';

      $http.jsonp(url).success(function(data){
          $scope.data=data;
      });
    };

    $scope.getUsers();
  })

  .controller('ProjectProgressCtrl',['$scope','DTOptionsBuilder','DTColumnDefBuilder','Leave', function($scope, DTOptionsBuilder, DTColumnDefBuilder,Leave){
    
        /* event source that contains custom events on the scope */

    $scope.Leaves = Leave.find();  
  
  
    $scope.dtOptions = DTOptionsBuilder.newOptions().withBootstrap();
    $scope.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3),
      DTColumnDefBuilder.newColumnDef(4).notSortable()
    ];
  }]);

