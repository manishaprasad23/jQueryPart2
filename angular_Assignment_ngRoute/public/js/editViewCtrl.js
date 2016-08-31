app.controller("editViewCtrl", function($scope, MyService, Myfac) {

	var id = Myfac.getid();

	MyService.getPeoplebyID(id)
	.success(function(response) {

		$scope.user = response.name;
		$scope.city = response.city;
		$scope.phone = response.phone;

	})
	.error(function(error) {
		alert("Error loading page");
	});

	$scope.funSaveUp = function() {

		var peopleObject = {

			name : $scope.user,
			city : $scope.city,
			phone : $scope.phone
		};

		MyService.putPeople(peopleObject,id)
		.success(function(response) {

			alert("Data updated successfully");
		})
		.error(function(error) { 

			alert("Error loading page");
		});


	}; //funSaveUp ends

}); // editViewCtrl ends