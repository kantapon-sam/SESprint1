//
app.service('sharedProperties',function(){
var clubid=0;
return {
	getClubid: function(){
		return clubid;
	},
	setClubid: function(value){
		clubid=value;
	}
};
});

	app.controller('StudentController', function($scope, $http, sharedProperties){
		
	$scope.showstudents = function() {

		$http.get("http://localhost:8080/showstudents/"+ sharedProperties.getClubid()).success(function(data){
			$scope.datas = data;	
		}).error(function (data, status, headers, config){
			console.log("ERR:" + status);
			console.log("ERR:" + headers);
		});
															
	}
	$scope.showstudents();
	
	
	$scope.showclub = function() {
		
		$http.get("http://localhost:8080/showclub").success(function(data){
			$scope.datas1 = data;			
		}).error(function (data, status, headers, config){
			console.log("ERR:" + status);
			console.log("ERR:" + headers);
		});
		
	}
	
	$scope.showclub();
	
	$scope.nameClub = function(id) {
		sharedProperties.setClubid(id);
		
		ons.slidingMenu.setMainPage('club-club/clubdetail.html', {closeMenu: true})
		
	}
	
	$scope.showDetailClub = function() {
		var id = sharedProperties.getClubid();
			$http.get("http://localhost:8080/showclubdetail/"+ id).success(function(data){
			$scope.clubdetail = data;
		}).error(function (data, status, headers, config){
			console.log("ERR:" + status);
			console.log("ERR:" + headers);
		});
	}
	
	$scope.showDetailClub();
	
	$scope.addStudent = function(){
		var data = {
				idStudent: $scope.idStudent,
				firstname: $scope.firstname,
				surname: $scope.surname,
				year: $scope.year,
				faculty: $scope.faculty,
				department: $scope.department
		};
		
		$http.post('http://localhost:8080/student/add/' + sharedProperties.getClubid(), data).success(function(data){
			alert(data);
		}).error(function (data, status, headers, config){
			alert('สมัครเรียบร้อย');
			ons.slidingMenu.setMainPage('club-student/studentlist.html', {closeMenu: true})
		});
		
		
	}

	

});