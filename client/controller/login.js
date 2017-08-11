var myApp = angular.module('anupam');

myApp.controller('LoginController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
	console.log('LoginController loaded...');

	
	
	$scope.checkLogin = function () {
		alert("login checking..");
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
			
		   alert("okay")
         // success callback
       }, 
       function(error){
		   alert("not okay");
         // failure callback
       }
    );
	}

	$scope.getLogin = function () {
		alert("get the login_id detail here..");
		console.log($scope.login);
		var id = $routeParams.id;
		$http.get('/api/logins/' + id).success(function (response) {
			$scope.login = response;
		});
	}


	$scope.addBook = function () {
		console.log($scope.book);
		$http.post('/api/books', $scope.book).success(function (response) {
			window.location.href = '#/login_next';
		});
	}

	$scope.updateBook = function () {
		var id = $routeParams.id;
		$http.put('/api/login/' + id, $scope.book).success(function (response) {
			window.location.href = '#/books';
		});
	}

	$scope.removeBook = function (id) {
		$http.delete('/api/books/' + id).success(function (response) {
			window.location.href = '#/books';
		});
	}
}]);