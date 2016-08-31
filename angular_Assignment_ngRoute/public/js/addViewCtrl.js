app.controller("addViewCtrl", function($scope, MyService) {

	$scope.funSave = function() {

		$scope.val = false;

		var peopleObject = {

			name : $scope.user,
			city : $scope.city,
			phone : $scope.phone
		};

		MyService.addPeople(peopleObject)
		.success(function(response) {

			alert("Data inserted successfully");
		})
		.error(function(error) { 

			alert("Error loading page");
		});

		}; // funSave ends

}); // addViewCtrl ends