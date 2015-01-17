
app.controller('NonController', function($scope, $http,Auth){	
	
	$scope.show = function() {
		$http.get("http://localhost:8080/student/show/member/" + Auth.getid()).success(function(data){
			$scope.datas = data;
			console.log(data)
		}).error(function (data, status, headers, config){
			console.log("ERR:" + status);
			console.log("ERR:" + headers);
		});
	}
	$scope.show();
	$scope.showdetailstudent = function(id) {
		//alert('aaa');
		Auth.setid(id);
		ons.slidingMenu.setMainPage('club_chairman/showdetailstudent.html', {closeMenu: true});
	}
	    $scope.deletestudent = function(id){
		$http.get("http://localhost:8080/student/delete/" + id).success(function(data){
		alert('delete seccess');
		$scope.show();
		}).error(function (data, status, headers, config){
			console.log("ERR:" + status);
			console.log("ERR:" + headers);
		});
		
	}
	
	
});




app.controller('ShowclubdetailController', function($scope, $http,Auth){
	var id = Auth.getid();
	//alert(id)
	$http.get("http://localhost:8080/club/show/user/" + id).success(function(data){
		$scope.datas = data;
		console.log(data)
	})	
		//alert(Shared.getId());


});


app.controller('ShowdetailstudentController', function($scope, $http,Auth){
	var id = Auth.getid();
	$http.get("http://localhost:8080/student/show/" + id).success(function(data){
		$scope.datas = data;
	}).error(function (data, status, headers, config){
		console.log("ERR:" + status);
		console.log("ERR:" + headers);
	});	
		//alert(Shared.getId());


});
