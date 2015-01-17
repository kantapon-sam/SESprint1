app.controller('ProjectController', function($scope, $http){
	$scope.price = 20000;
	$scope.addMoney = function() {
		var data = {
			projectName:          $scope.projectName, 
			description:          $scope.description,
			money: 				  $scope.money
		}

		$scope.price -= $scope.money;
		console.log(data)	
		$http.post('http://localhost:8080/test/add', data).success(function(data){
			console.log('success ' + data)
			
		})
		.error(function (data, status, headers, config){
			alert("Add OK");
		})

	}
});