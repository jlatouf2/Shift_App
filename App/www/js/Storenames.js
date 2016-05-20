
 angular.module('starter').controller('storenamesController',
function ($scope, $http, $rootScope, $interval, AuthService, $ionicScrollDelegate) {
							//postal123 =null;
							$scope.store = "Walmart";
						//	$scope.postalcodetoAdd = "postal123";

            console.log($scope.linemodal);

$rootScope.linemodal2 = 1;
          	 if ($rootScope.linemodal2 === 3) {
          	 $rootScope.linemodal2 = 1;
          	 console.log($scope.linemodal2);

          	}


            $scope.$on("$ionicView.enter", function(event, data){
          	   // handle event
          		 //$scope.login();

               console.log($rootScope.linemodal);

               		 if ($scope.linemodal2 === 1) {
                     $scope.openstoremodal();
               		 $rootScope.linemodal2 = 4;
               		 console.log($scope.linemodal2);

               }


          	});



            console.log($scope.first);
            console.log($scope.last);

            $scope.logout = function() {
              $rootScope.userdata = false;
              console.log('scope.last');
            //	$state.go('app.loginpage');

            };

            //ADD NAME TO Stores
            $scope.addName = function() {
            	$scope.storesAvailable.push($scope.store);
            	console.log($scope.storesAvailable);
              $ionicScrollDelegate.scrollBottom();


            };

            //Remove name from Stores
            $scope.removeName = function(name) {
          var i = $scope.storesAvailable.indexOf(name);

          $scope.storesAvailable.splice(i, 1);
          console.log($scope.storesAvailable);

        };

        $scope.onHold = function(name) {
      var i = $scope.storesAvailable.indexOf(name);

      $scope.storesAvailable.splice(i, 1);
      console.log($scope.storesAvailable);

    };

    $scope.onHold2 = function(stores) {
      console.log(stores);

  var i = $scope.storesAvailable.indexOf(stores);
  console.log(i);

  $scope.storesAvailable.splice(i, 1);
 console.log($scope.storesAvailable);

};

//use var i to get the index of the name in the array ; then use array[1] to get the information you
//need and pass that with rootscope, or simply pass the var i with rootscope and then retrieve the info
//var name = cars[0];
// $scope.storesAvailable[i]
        $scope.getStoreName = function(stores){
            console.log("LineIn " + stores);

           $rootScope.grabLineIn = stores;
              console.log ("LineIn Saved in variable: " + $scope.grabLineIn);

          };


						  // wire up button click
					$(document).ready(function () {
						  // wire up button click
						 // $('#go').click(function () {
						    // test for presence of geolocation
						    if(navigator && navigator.geolocation) {
						      // make the request for the user's position
						      navigator.geolocation.getCurrentPosition(geo_success, geo_error);
						    } else {
						      // use MaxMind IP to location API fallback
						      printAddress(geoip_latitude(), geoip_longitude(), true);
						    }
					 //     });
					 });


						 /*
//THIS IS THE CODE TO PROGRAM THE BUTTON
						 			$(document).ready(function () {
						  // wire up button click
						  $('#go').click(function () {
						    // test for presence of geolocation
						    if(navigator && navigator.geolocation) {
						      // make the request for the user's position
						      navigator.geolocation.getCurrentPosition(geo_success, geo_error);
						    } else {
						      // use MaxMind IP to location API fallback
						      printAddress(geoip_latitude(), geoip_longitude(), true);
						    }
						  });
						});
						*/


	function geo_success(position) {
				  printAddress(position.coords.latitude, position.coords.longitude);
				}

	function geo_error(err) {
				  // instead of displaying an error, fall back to MaxMind IP to location library
				  printAddress(geoip_latitude(), geoip_longitude(), true);
				}

						// use Google Maps API to reverse geocode our location
	function printAddress(latitude, longitude, isMaxMind) {
				    // set up the Geocoder object
						    var geocoder = new google.maps.Geocoder();

				    // turn coordinates into an object
				    var yourLocation = new google.maps.LatLng(latitude, longitude);

				    // find out info about our location
				    geocoder.geocode({ 'latLng': yourLocation }, function (results, status) {
				    if(status == google.maps.GeocoderStatus.OK) {
				      if(results[0]) {
				        $('#results').fadeOut(function() {
				          $(this).html('<p><b>Abracadabra!</b> My guess is:</p><p><em>' + results[0].formatted_address  +  '</em></p>').fadeIn();

				                     var searchAddressComponents = results[0].address_components,
				    searchPostalCode="";

					$.each(searchAddressComponents, function(){
					    if(this.types[0]=="postal_code"){
					        searchPostalCode=this.short_name;
					        console.log(searchPostalCode);
					        $rootScope.postal123 = searchPostalCode;
					            //   console.log("Postal code" + searchPostalCode);
					    //  $scope.postalcodetoAdd = postal123;

					var newpostalcode = searchPostalCode.substr(0, searchPostalCode.length-4);
					console.log('newpostal' + newpostalcode);
					$rootScope.postal2 = newpostalcode;

					    }
					});

/*
      NOTE: USE THIS TO POST DATA TO DATABASE
			$http.post('/user/postinfo25', { "postal": $scope.postal2 }).success(function( data) {$scope.contacts = data;
								console.log (data);
								}, function(posts) {});
*/
					          console.log('formatted_address' + results[0].formatted_address);
					        });
					      } else {
					        error('Google did not return any results.');
					      }
					    } else {
					      error("Reverse Geocoding failed due to: " + status);
					    }
					  });



					 /*
					  *           var searchAddressComponents = results[0].address_components,
					    searchPostalCode="";

					$.each(searchAddressComponents, function(){
					    if(this.types[0]=="postal_code"){
					        searchPostalCode=this.short_name;
					    }
					});


					     if(results[i].address_components[j].types[k] == "postal_code"){
					                    var zipcode = results[i].address_components[j].short_name;
					                    console.log('ZIPCODE' + zipcode)
					                              alert("No results found" + zipcode);

					                }

					  */


							  // if we used MaxMind for location, add attribution link
							  if(isMaxMind) {
							    $('body').append('<p><a href="http://www.maxmind.com" target="_blank">IP to Location Service Provided by MaxMind</a></p>');
							  }
							}

					function error(msg) {
					  alert(msg);
					}

//Posts Store name to SEARCH for in table
				   $scope.changeStatus30 = function(){
						console.log("clicked");

						$http.post('/user/postinfo30',
						{ "store": $scope.store })
							.success(function( data) {
							$scope.contacts = data;
							console.log (data);
						}, function(posts) {});

					};

//Grabs Storename to pass to next page
				$scope.grabStuff = function(contact){
							console.log("Name of Store " + contact);

						$rootScope.grabStorename = contact;
						console.log ("Name of Store variable: " + $scope.grabStorename);
						//THEREFORE USE $scope.grabLineIn to pass the vaariable to the next page:
					};

//Posts New Store Name....BUT does not post address


				      $scope.submitName = function(){
						$http.post('/user/postStore',
							{"store": $scope.storetoAdd }).
							success(function() {
							console.log('Post success');
							console.log($scope.storetoAdd);

					console.log('success');
								}).error(function() {
									console.log('Post failure');
								});
						    };

					     //   $rootScope.postal123 = searchPostalCode;

		 $scope.submitInformation = function(){
						$http.post('/user/storePostalcode',
							{"store": $scope.storetoAdd, "postal": $scope.postal123}).
							success(function() {
							console.log('Post success');
							console.log($scope.storetoAdd);

					console.log('success');
								}).error(function() {
									console.log('Post failure');
								});
						    };

	        });
