var myApp = angular.module('anupam');

myApp.controller('DashboardController', ['$scope', '$http', '$location', function ($scope, $http, $location, $routeParams) {
	console.log('DashboardController loaded...');
	$scope.tasks = [];
	console.log($scope.tasks);

	$scope.getTask = function () {
		$http.get('/api/gettask/')
			.then(function (response) {
				$scope.tasks = response.data;
				console.log("task get", $scope.tasks);
			})
			.catch(function (error) {
				$scope.error = error;
			});
	}
	$scope.getTask();


	$scope.addTask = function () {
		// alert("Your has been added..");
		console.log($scope.task);
		$http.post('/api/addtask', $scope.task).success(function (response) {
			$scope.tasks.push($scope.task);
			$scope.getTask();
			console.log("task added", $scope.tasks);
		});
		document.forms['leadschool'].reset();
	}

	$scope.logout = function () {
		console.log("logout");
		$location.path('/');
	}

	$scope.taskDelete = function (id) {
		// alert("Your task has been deleted");
		$http.delete('/api/deletetask/' + id).success(function (response) {
			if (response) {
				$scope.getTask();
				console.log("deleted");
			}
		});
	}

	// $scope.taskEdit = function (id) {
	// 	console.log($scope.task);
	// 	console.log(id);

	// 	$http.put('/api/editTask/' + id, $scope.task).success(function (response) {
	// 	});
	// 	document.leadschoool.reset();
	// }


	$scope.taskEdit = function(id){
		console.log($scope.task);
		// var id = $routeParams.id;
		console.log(id);
		$http.put('/api/books/'+id, $scope.task).success(function(response){
			$scope.getTask();
				console.log("deleted");
			// window.location.href='#/books';
		});
	}



	$scope.schools = ["Rayan", "MGM", "SVV"];
	console.log($scope.schools);
	$scope.classes = ["First", "Second", "Third"];
	$scope.division = ["A", "B", "C"];

	$scope.view = function () {
		var e = document.getElementById("view").style.display = "block";
		var b = document.getElementById("edit").style.display = "none";
	}

	$scope.view();

	student_view = function () {
		var a = document.getElementById("view").style.display = "block";
		var b = document.getElementById("edit").style.display = "none";
	}


	student_edit = function () {
		var c = document.getElementById("view").style.display = "none";
		var d = document.getElementById("edit").style.display = "block";
	}

	$('#datepicker1').datepicker({
		showOn: "button",
		buttonImage: "./images/calendar.gif",
		buttonImageOnly: true,
		dateFormat: 'dd/mm/yy',
		changeMonth: true,
		changeYear: true,
		onSelect: function (date) {
			angular.element($('#datepicker1')).triggerHandler('input');
		}
	});

	$('#datepicker2').datepicker({

		dateFormat: 'dd/mm/yy',
		changeMonth: true,
		changeYear: true,
		onSelect: function (date) {
			angular.element($('#datepicker2')).triggerHandler('input');
		}
	});

}]);


