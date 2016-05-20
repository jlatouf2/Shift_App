angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };


  $scope.Submit3 = function() {

    $rootScope.first = $scope.firstname;
    $rootScope.last = "Lastname";

    //make the signup/login buttons disappear
    $rootScope.userdata = true;

    console.log($rootScope.first);
    console.log($rootScope.last);

  };



  // Template for Modal
  $ionicModal.fromTemplateUrl('templates/modals/newtemplate.html', {
  	scope: $scope
  }).then(function(modal) {
  	$scope.modal1 = modal;
  });

  $scope.closeLogin1 = function() {
  	$scope.modal1.hide();
  };

  // Open the login modal
  $scope.newtemplate = function() {
  	$scope.modal1.show();
  };


  // Template for Storenames Modal
  $ionicModal.fromTemplateUrl('templates/modals/Storenamemodal.html', {
  	scope: $scope
  }).then(function(modal) {
  	$scope.modal2 = modal;
  });

  $scope.closestoremodal = function() {
  	$scope.modal2.hide();
  };

  // Open the login modal
  $scope.openstoremodal = function() {
  	$scope.modal2.show();
  };

  // Template for storelines Modal
  $ionicModal.fromTemplateUrl('templates/modals/storelinesmodal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal3 = modal;
  });

  $scope.closelinesmodal = function() {
    $scope.modal3.hide();
  };

  // Open the login modal
  $scope.openlinesmodal = function() {
    $scope.modal3.show();
  };


  // Template for tab Modal
  $ionicModal.fromTemplateUrl('templates/modals/tabmodal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal4 = modal;
  });

  $scope.closetabmodal = function() {
    $scope.modal4.hide();
  };

  // Open the login modal
  $scope.opentabmodal = function() {
    $scope.modal4.show();
  };



  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    console.log('Doing login', $scope.loginData.username);

    $rootScope.first = $scope.loginData.username;
  //  $rootScope.last = $scope.loginData.password;
  console.log($rootScope.first);
  console.log($scope.loginData.password);

$rootScope.userdata = true;
	$state.go('app.Storenames');



  //make the signup/login buttons disappear


    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
