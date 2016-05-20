angular.module('starter').controller('tabdistanceController',
function ($scope, $http, $rootScope, $location,  AuthService, $ionicModal, $window, $ionicScrollDelegate) {

					console.log ("LineIn NEEDS TO BE SEARCHED: " + $scope.peopleLine);

					console.log($scope.grabLineIn);
					console.log($scope.lineStuff);
					console.log($scope.first);

					$scope.logout = function() {
						$rootScope.userdata = false;
						console.log('scope.last');
					//	$state.go('app.loginpage');

					};

					$scope.getIndex = function(chat){
	console.log("name" + chat.name);
	console.log("id" + chat.id);
	console.log("distance" + chat.distance);

//	console.log("ldfkjfldj" + $scope.chats[name].name);
$rootScope.chat2 = chat;
console.log("name is: " + $scope.chat2.name);
						};


					$scope.getNames = function() {
						console.log($scope.names);
					};


					$scope.onHold2 = function(chat) {
						console.log(chat);

					var i = $scope.chats.indexOf(chat);
					console.log(i);

					$scope.chats.splice(i, 1);
					console.log($scope.chats);

					};


/*

					<div ng-init="FunCall()"></div>

					$scope.FunCall = function () {
					        alert("Called");
					};
*/


				//	$scope.peopleLine.push('bob');








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
	if ($scope.first !== undefined) {
		var len = $scope.chats.length;

		$scope.chats.push({id: len, distance: 50 ,name: $scope.first, face: 'img/ionic.png'});
		$ionicScrollDelegate.scrollBottom();

		console.log($scope.chats);

	} else {
	//	console.log('No Named Saved');
	//var len2 = len + 1;
	var len2 = $scope.chats.length;

		$scope.chats.push({id: len2, distance: 20, name: "Jarred" , face: 'img/ionic.png'});



		console.log($scope.chats);
		$ionicScrollDelegate.scrollBottom();


	}

};




	  });
