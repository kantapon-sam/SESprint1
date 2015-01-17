
app.service('Shared',function(){
    var id = 0;
    var userid=0;

    return{
        getid: function(){
            return id;
        },
        setid: function(value){
            id = value;
        },
       getUserid: function(){
            return userid;
        },
        setUserid: function(value){
            userid = value;
        }
    };
});
app.controller('ShownamestudentController', function($scope, $http, Shared){
	$scope.show = function() {
		$http.get("http://localhost:8080/student/show/member/" + Shared.getid()).success(function(data){
			$scope.datas = data;
		}).error(function (data, status, headers, config){
			console.log("ERR:" + status);
			console.log("ERR:" + headers);
		});
	}

	
	$scope.show();

	$scope.showdetailstudent = function(id) {
		//alert('aaa');
		Shared.setid(id);
		myNav.pushPage('showdetailstudent.html');
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

app.controller('ShowdetailstudentController', function($scope, $http,Shared){
	var id = Shared.getid();
	$http.get("http://localhost:8080/student/show/" + id).success(function(data){
		$scope.datas = data;
	}).error(function (data, status, headers, config){
		console.log("ERR:" + status);
		console.log("ERR:" + headers);
	});	
		//alert(Shared.getId());


});

app.controller('ShowclubController', function($scope, $http, Shared){
	/*$scope.show = function() {
		$http.get("http://localhost:8080/club/show").success(function(data){
			$scope.datas = data;
		}).error(function (data, status, headers, config){
			console.log("ERR:" + status);
			console.log("ERR:" + headers);
		});
	}
	$scope.show();
	$scope.club = function(id) {
		//alert('aaa');
		Shared.setid(id);
		myNav.pushPage('club.html');
	}*/

	$scope.show1 = function(id) {
		$http.get("http://localhost:8080/club/show/user/" + 2).success(function(data){
			$scope.datas = data;
			alert(datas)
		}).error(function (data, status, headers, config){
			console.log("ERR:" + status);
			console.log("ERR:" + headers);
		});
	}
	$scope.show1();
});

app.controller('ShowclubdetailController', function($scope, $http,Shared){
	var id = Shared.getid();
	$http.get("http://localhost:8080/club/show/" + id).success(function(data){
		$scope.datas = data;
		alert(datas)
	}).error(function (data, status, headers, config){
		console.log("ERR:" + status);
		console.log("ERR:" + headers);
	});	
		//alert(Shared.getId());


});