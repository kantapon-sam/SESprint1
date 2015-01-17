app.controller('RuleController', function($scope, $http){	
	
	$scope.listRule = function() {
		$http.get('http://localhost:8080/rule/list').success(function(data) {
			$scope.datas = data
		})
	}
	$scope.listRule()
	
	$scope.addRule = function(){
		alert("data");
		var data = {
				name: $scope.name
		};
		$http.post('http://localhost:8080/rule/add', data).success(function(data){
			alert(data);
			$scope.name = ''
			$scope.listRule()
		}).error(function (data, status, headers, config){
			alert('เพิ่มกฎเกณฑ์เรียบร้อย');
		});
	}

	$scope.deleteIdRule = function(id) {
		$http.get('http://localhost:8080/rule/delete/' + id).success(function(data) {
			alert(data)
			$scope.name = ''
			$scope.listRule()
		})
	}
	
});

