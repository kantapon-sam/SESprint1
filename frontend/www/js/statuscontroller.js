app.controller('AddController', function($scope, $http) {

	$scope.addData = function() {
		
		var data = {
			comment : $scope.msg
		}

		$http.post('http://localhost:8080/add', data).success(function() {
			//alert(data)
			$scope.msg = ''
		})
		
	}
});

app.controller('PostController', function($scope, $http) {	
	//$scope.showall = function () {
		$http.get('http://localhost:8080/add/post').success(function(data) {
			$scope.datas = data;
			console.log(data);
		});
	//}
	//$scope.showall();
});
