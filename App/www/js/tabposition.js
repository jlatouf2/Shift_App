angular.module('starter').controller('tabpositionController',
function ($scope, $http, $rootScope, $location,  AuthService, $ionicModal, $window, $state, $ionicScrollDelegate) {

					console.log ("LineIn NEEDS TO BE SEARCHED: " + $scope.peopleLine);

					console.log($scope.grabLineIn);
					console.log($scope.lineStuff);


					          	 if ($rootScope.linemodal3 === 3) {
					          	 $rootScope.linemodal3 = 1;
					          	 console.log($scope.linemodal3);

					          	}


					$scope.$on("$ionicView.enter", function(event, data){


								 if ($scope.linemodal3 === undefined) {
									 $scope.opentabmodal();
								 $rootScope.linemodal3 = 4;
								 console.log($scope.linemodal3);

						 }

					});


					            console.log($scope.first);
					            console.log($scope.last);

											$scope.logout = function() {
												$rootScope.userdata = false;
												console.log('scope.last');
											//	$state.go('app.loginpage');

											};


					$scope.Appear = function() {
						$rootScope.userdata = true;

					};

					$scope.Appear2 = function() {
					if ($rootScope.userdata === undefined) {
						$rootScope.userdata = true;

					}	else if ($rootScope.userdata === true) {
						$rootScope.userdata = undefined;

					}

					};

					$scope.onHold = function() {

						console.log('Works');
					};

/*
					//use var i to get the index of the name in the array ; then use array[1] to get the information you
					//need and pass that with rootscope, or simply pass the var i with rootscope and then retrieve the info
					//var name = cars[0];
					// $scope.storesAvailable[i]
					$scope.setClickedRow = function(index){  //function that sets the value of selectedRow to current index
	 $scope.selectedRow = index;
}
ng-click="setClickedRow($index)"
*/
        $scope.getPersonName = function(name){
console.log("name" + name);
            var i = $scope.chats.indexOf(name);
						console.log("var" + i);

            console.log("ldfkjfldj" + $scope.chats[2].name);
          //  console.log("ffffff" + $scope.chats[i]);
						//console.log("fffffdfdff" + $scope.chats.name);

          };
					$scope.getIndex = function(chat){
	console.log("name" + chat.name);
	console.log("id" + chat.id);
	console.log("distance" + chat.distance);

//	console.log("ldfkjfldj" + $scope.chats[name].name);
$rootScope.chat2 = chat;
console.log("name is: " + $scope.chat2.name);
	          };
/*
	THIS IS BETTER B/C THE $index only gets the row so if you order/sort the info it will be out of order
	but it wont be if you use [chat.name]
			either use chat.id, or chat.name, or chat.distance, etc OR
			getIndex($index) and $scope.getIndex = funciton(name) [this gets the row index]

*/

/*
					function toggle(button) {
					  if (button.value == "OFF") {
					    button.value = "ON";
					  } else {
					    button.value = "OFF";
					  }
					}
					*/

					$scope.getNames = function() {
						console.log($scope.names);
					};


/*

					<div ng-init="FunCall()"></div>

					$scope.FunCall = function () {
					        alert("Called");
					};
*/








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


$scope.onHold2 = function(chat) {
	console.log(chat);

var i = $scope.chats.indexOf(chat);
console.log(i);

$scope.chats.splice(i, 1);
console.log($scope.chats);

};


$scope.addSavedName = function() {
	if ($scope.first !== undefined) {
		var len = $scope.chats.length;

		$scope.chats.push({id: len, name: $scope.first, face: 'img/ionic.png'});
		$ionicScrollDelegate.scrollBottom();

		console.log($scope.chats);

	} else {
	//	console.log('No Named Saved');
	//var len2 = len + 1;
	var len2 = $scope.chats.length;

		$scope.chats.push({id: len2, name: "Jarred" , face: 'img/ionic.png'});



		console.log($scope.chats);
		$ionicScrollDelegate.scrollBottom();


	}

};





	  });
