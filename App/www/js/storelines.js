
angular.module('starter').controller('storelinesController',
function ($scope, $http, $rootScope, AuthService, $ionicModal, $ionicScrollDelegate) {

//		1) Add this
	console.log($scope.linemodal);

	 if ($rootScope.linemodal === 3) {
	 $rootScope.linemodal = 1;
	 console.log($scope.linemodal);

	}

	$scope.$on("$ionicView.beforeEnter", function(event, data){
	   // handle event

	});


	$scope.$on("$ionicView.enter", function(event, data){
	   // handle event
		 //$scope.login();

		 //		2) Add this

console.log($rootScope.linemodal);

		 if ($scope.linemodal === 1) {
		 $scope.openlinesmodal();
		 $rootScope.linemodal = 4;
		 console.log($scope.linemodal);

}
	});


	$scope.$on("$ionicView.afterEnter", function(event, data){
	   // handle event
	});


	console.log($scope.names);

$rootScope.names = 'Yellow';
console.log($scope.grabLineIn);

							console.log("Store name: " + $scope.grabStorename);

							$scope.logout = function() {
								$rootScope.userdata = false;
								console.log('scope.last');
							//	$state.go('app.loginpage');

							};

							$scope.getLineName = function(line){
			            console.log("LineIn " + line);

			          $rootScope.lineStuff = line;
			             console.log ("LineIn Saved in variable: " + $scope.lineStuff);

			          };




$scope.addLine = function() {
	console.log($scope.lines.length);

	var n = Number($scope.lines.length);
	var num = n + 1;
	console.log(num);

	$scope.lines.push('Line' + num);
	console.log($scope.lines);
	$ionicScrollDelegate.scrollBottom();

};

$scope.removeLine = function(name) {
var i = $scope.lines.indexOf(name);

$scope.lines.splice(i, 1);
console.log($scope.lines);

};

$scope.onHold = function() {
	var i = $scope.lines.indexOf(name);

	$scope.lines.splice(i, 1);
	console.log($scope.lines);

	console.log('Works');
};


$scope.onHold2 = function(line) {
	console.log(line);

var i = $scope.lines.indexOf(line);
console.log(i);

$scope.lines.splice(i, 1);
console.log($scope.lines);

};


//Calculates number of lines in table:

$scope.addName = function() {
	$scope.lineups2.push('bob');
	console.log($scope.lineups2);

};

$scope.removeName = function(name) {
var i = $scope.lineups2.indexOf(name);

$scope.lineups2.splice(i, 1);
console.log($scope.lineups2);

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





				$scope.numberRows = function(){
				//	console.log("Number of Rows " + $scope.numberofRows);
					$http.post('/user/lineNumber', { }).success(function( data)
						 {
						 	//$scope.contacts = data;
							console.log('THIS SHOWS THE NUMBER OF LINES ' +data );
								var b = parseInt("data");
								console.log (b);

							}, function(posts) {});
						};


					$rootScope.exampleLine = "Walmart";


		//	This is copy of above that needs to be fixed so that it 1)Counts rows
		 //		2) On success makes adds a http function that adds another line to Storelines

				$scope.numberStuff = function(){
				//	console.log("Number of Rows " + $scope.numberofRows);
					$http.post('/user/lineNumber', {"store" : $scope.exampleLine }).success(function( data)
						 {
						 	//$scope.contacts = data;
							console.log('THIS SHOWS THE NUMBER OF LINES ' +data );

							$rootScope.lineNum = data;
							console.log('DATA LENGTH' + (data.length+1));
							addLineFunction();


							}, function(posts) {});
						};


					function addLineFunction() {
					$http.post('/user/addLine', {"store" : $scope.exampleLine, "linein" : $scope.numberofRows  }).success(function(data)
						 {

						 	$scope.contacts = data;
							console.log('THIS SHOWS THE NUMBER OF LINES ' +data );
							console.log(data);
							myData22();
							}, function(posts) {});

					}


					function myData22(){
							$http.post('/user/storeName', { }).success(function( data)
						 {$scope.contacts = data;
							}, function(posts) {});
}






						var $index;
						var contact;


						var fruits = ["Banana", "Orange", "Apple", "Mango"];
						console.log(fruits.length);


				$scope.grabStuff = function(contact){
							console.log("LineIn " + contact);

						$rootScope.grabLineIn = contact;
						console.log ("LineIn Saved in variable: " + $scope.grabLineIn);
					};


	  });
