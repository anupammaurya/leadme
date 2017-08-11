var myApp = angular.module('anupam');

myApp.controller('Registercontroller', ['$scope', '$http', '$location', function ($scope, $http, $location) {
	console.log('Registercontroller loaded...');

$scope.addLogin = function () {
		alert("add user..");
		console.log($scope.register);
		$http.post('/api/adduser', $scope.register).success(function (response) {
			console.log(response);
			window.location.href='#/'; 
		});
	}
}]);