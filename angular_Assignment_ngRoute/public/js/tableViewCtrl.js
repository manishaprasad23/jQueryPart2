app.controller("tableViewCtrl", function($scope, MyService, Myfac, MyText) {

	$scope.start = 3;
	// var myflag = MyFlag.getflag();
	// alert(myflag);

	//if(myflag===true) {
	
		// var text = MyText.gettxt();
	 //    alert(text);

	 //     MyService.getPeople(text)
	 //     .success(function(response) {

	 //             //alert(response);

	 //             $scope.table_Data = response;

	 //         })
	 //     .error(function (error) { 

	 //         $scope.table_Data = error.statusText;

	 //     });
	 //}

	 //else {

	//funLoad();

	// $scope.funLoad = function() {

		$scope.val = false;
		$scope.btnhide = false;

		MyService.loadPeople()
		.success(function(response) {

			$scope.table_Data = response;

		})
		.error(function(error) { 

			$scope.table_Data = error.statusText;

		});


		// }; // funLoad ends
	//}
	//}

	$scope.funNext = function() {

		$scope.start = $scope.start + 1;


		MyService.loadNext($scope.start)
		.success(function(response) {

			$scope.table_Data = response;

		})
		.error(function(error) { 

			$scope.table_Data = error.statusText;

		});

		}; // funNext ends

		$scope.funPrev = function() {

			$scope.start = $scope.start - 1;

			if ($scope.start < 1) {

				alert("No records found!");
			}

			else {

				MyService.loadNext($scope.start)
				.success(function(response) {

					$scope.table_Data = response;

				})
				.error(function (error) { 

					$scope.table_Data = error.statusText;

				});

		} // else ends

		}; // funPrev ends

		$scope.funUpdate = function(id) {

			Myfac.setid(id);

		}; // funUpdate ends

		$scope.funDelete = function(rowIndx, dataIndx) {

			$scope.table_Data.splice(rowIndx, 1);

			MyService.deletePeople(dataIndx)
			.success(function(response) {

				alert("Data deleted successfully");
			})
			.error(function(error) {

				$scope.table_Data = error.statusText;


			});


		}; // funDelete ends

}); // tableViewCtrl ends





