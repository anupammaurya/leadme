var myApp = angular.module('anupam');

myApp.controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
	console.log('LoginController loaded...');

	
	
	$scope.checkLogin = function () {
		console.log("login checking..");
		console.log($scope.login);
		$http.post('/api/logins', $scope.login).then(
       function(response){
		   console.log(response);
			  var x = response.data;
				console.log(x);
			  	if(x === null)
					{
						$location.path("/");
					}
					else {
						$location.path("/dashboard");
					}
			
		   console.log("okay")
         // success callback
       }, 
       function(error){
		   console.log("not okay");
         // failure callback
       }
    );
	}

	$scope.getLogin = function () {
		console.log("get the login_id detail here..");
		console.log($scope.login);
		var id = $routeParams.id;
		$http.get('/api/logins/' + id).success(function (response) {
			$scope.login = response;
		});
	}


	$scope.addlead = function () {
		console.log($scope.lead);
		$http.post('/api/leads', $scope.lead).success(function (response) {
			window.location.href = '#/login_next';
		});
	}

	$scope.updatelead = function () {
		var id = $routeParams.id;
		$http.put('/api/login/' + id, $scope.lead).success(function (response) {
			window.location.href = '#/leads';
		});
	}

	$scope.removelead = function (id) {
		$http.delete('/api/leads/' + id).success(function (response) {
			window.location.href = '#/leads';
		});
	}
}]);