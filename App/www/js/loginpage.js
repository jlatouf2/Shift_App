angular.module('starter').controller('loginpageController',
function ($scope, $http, $rootScope, $location,  AuthService, $ionicModal, $window) {

					console.log ("LineIn NEEDS TO BE SEARCHED: " + $scope.peopleLine);

					console.log($scope.grabLineIn);
					console.log($scope.lineStuff);

					$scope.logout = function() {
						$rootScope.userdata = false;
						console.log('scope.last');
					//	$state.go('app.loginpage');

					};

					$scope.getNames = function() {
						console.log($scope.names);
					};


					$scope.Submit2 = function() {

						$rootScope.first = $scope.firstname;
						$rootScope.last = $scope.lastname;

						//make the signup/login buttons disappear
						$rootScope.userdata = true;

						console.log($rootScope.first);
						console.log($rootScope.last);

					};




/*

					<div ng-init="FunCall()"></div>

					$scope.FunCall = function () {
					        alert("Called");
					};
*/


				//	$scope.peopleLine.push('bob');

// Template for Modal
$ionicModal.fromTemplateUrl('templates/modals/newtemplate.html', {
	scope: $scope
}).then(function(modal) {
	$scope.modal = modal;
});

$scope.closeLogin = function() {
	$scope.modal.hide();
};

// Open the login modal
$scope.newtemplate = function() {
	$scope.modal.show();
};







//ADD NAME TO LINEUP
$scope.addName = function() {
	$scope.peopleLine.push('bob');
	console.log($scope.peopleLine);

};

//REMOVE NAME FROM LINEUP
$scope.removeName = function(name) {
var i = $scope.peopleLine.indexOf(name);

$scope.peopleLine.splice(i, 1);
console.log($scope.peopleLine);

};




//ADD NAME TO LINEUP 2
$scope.addName2 = function() {
	$scope.chats.push({id: 5, name: "Jarred"});
	console.log($scope.chats);
};

//REMOVE NAME FROM LINEUP2
$scope.removeName2 = function(name) {
var i = $scope.chats.indexOf(name);

$scope.chats.splice(i, 1);
console.log($scope.chats);

};


$scope.addSavedName = function() {
	if ($scope.names !== undefined) {
		$scope.chats.push({id: 5, name: $scope.names});
		console.log($scope.chats);

	} else {
		console.log('No Named Saved');
	}

};





	  });
