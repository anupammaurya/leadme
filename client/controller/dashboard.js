var myApp = angular.module('anupam');

myApp.controller('DashboardController', ['$scope', '$http', '$location', function ($scope, $http, $location, $routeParams) {
	console.log('DashboardController loaded...');

	$scope.getTask = function () {
		$http.get('/api/gettask/')
			.then(function (response) {
				;
				$scope.tasks = response.data;
				console.log("task get", $scope.tasks);
			})
			.catch(function (error) {
				$scope.error = error;
			});
	}

	$scope.addTask = function () {
		alert("adding task..");
		console.log($scope.task);
		$http.post('/api/addtask', $scope.task).success(function (response) {
			$scope.tasks.push($scope.task);
			console.log("task added", $scope.tasks);
		});
		window.location.href = '#/dashboard';
	}

	$scope.logout = function () {
		console.log("logout");
		$location.path('/');
	}

	$scope.taskDelete = function (id) {
		alert("task delete");
		$http.delete('/api/deletetask/' + id).success(function (response) {
			if (response) {
				console.log("deleted");
			}
		});
	}

	$scope.taskEdit = function (id) {
		alert("task edited");
		// var id = $routeParams.id;
		console.log(id);
		$http.put('/api/editTask/' + id, $scope.task).success(function (response) {

			// window.location.href = '#/books';
		});
	}


	// myApp.config(function($stateProvider) {
	//     $stateProvider
	//         .state('welcome', {
	//             url: '/',
	//             templateUrl: 'view/welcome.html'
	//         })

	// });

}]);