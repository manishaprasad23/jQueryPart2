
// $(document).ready(function()  {

// 	var $tableData = $('#tableData');

// 	var $input_name = $('#inputName');
// 	var $input_city = $('#inputCity');
// 	var $input_phone = $('#inputPhone');

// 	var flag = false;


// 	var addTemplate = $("#add-Template").html();

// 	function addPeople(people) {	

// 		$('.table_data').append(Mustache.render(addTemplate, people));
// 	}

// 	$("#load").click(function() {
// 		$('.table_data').empty();

// 		 flag = true;

// 		$.ajax({
// 			type : 'GET',
// 			url : "http://localhost:8080/citizen/?&_limit=19",
// 			success : function(data) {

// 				var abc= JSON.stringify(data);
// 				alert(abc);

// 				$('.table_data').append("<thead><tr><th>ID</th><th>NAME</th><th>CITY</th><th>PHONE</th></tr></thead>");

// 				$.each(data, function(i, detail){


// 			addPeople(detail);


//        }); // each function ends



// 		}, // success function ends

// 		error : function() {
// 			alert("Error loading page");
// 		}

// 	     }); // ajax search ends

// 	}); // load click function ends


// 	$("#find").click(function()  {

// 		$(".table_data").empty();

// 		//flag = true;

// 		var name = $("#searchtext").val();

// 		var str1 = 'http://localhost:8080/citizen?q='+name;

// 		alert(str1);


// 		$.ajax({
// 			type : 'GET',
// 			url : str1,
// 			success : function(data) {

// 				var abc= JSON.stringify(data);
// 				alert(abc);

//        $('.table_data').append("<thead><tr><th>ID</th><th>NAME</th><th>CITY</th><th>PHONE</th></tr></thead>");

//        $.each(data, function(i, detail){

//         addPeople(detail);

//        }); // each function ends



// 		}, // success function ends

// 		error : function() {
// 			alert("Error loading page");
// 		}

// 	}); // ajax search ends

// }); // search click function ends

// 	$tableData.delegate('.remove', 'click', function()  {

// 		var $tr = $(this).closest('tr');

// 		$.ajax({
// 			type: 'DELETE',
// 			url : "http://localhost:8080/citizen/" + $(this).attr('data-id'),
// 			success : function() {
// 				$tr.fadeOut(300, function() {
// 					$(this).remove();
// 				});


// 			} //success function ends

// 		}); //ajax remove ends

// });  // remove click function ends


// 	$('#save').on('click', function() { 

// 		$(".table_data").empty();

// 		var peopleObject = {
// 			name : $input_name.val(),
// 			city : $input_city.val(),
// 			phone : $input_phone.val()
// 		};

// 		var pName = $input_name.val();
// 		var pCity = $input_city.val()
// 		var pPhone = $input_phone.val()

// 		if(pName=="" || pCity=="" || pPhone=="") {
// 			alert("Fields cannot be left blank");
// 		}

// 			else {

// 			$.ajax({
// 			type: 'POST',
// 			url : "http://localhost:8080/citizen/",
// 			data : peopleObject,
// 			success : function(newPeople) {
// 				addPeople(newPeople);
// 			}

// 		}); // ajax post ends
// 	}

// }); // save click ends


// 	$('#cancel').on('click', function() { 

// 		$('#inputName').val("");
// 		$('#inputCity').val("");
// 		$('#inputPhone').val("");

// 	}); // cancel click ends


// 	$tableData.delegate('.editPeople', 'click', function()  {

// 		var $tr = $(this).closest('tr');
// 		$tr.find('input.name').val($tr.find('span.name').html());
// 		$tr.find('input.city').val($tr.find('span.city').html());
// 		$tr.find('input.phone').val($tr.find('span.phone').html());
// 		$tr.addClass('edit');

// 	}); // edit click ends

// 	$tableData.delegate('.cancelEdit', 'click', function()  {

// 		$(this).closest('tr').removeClass('edit');

// 	}); // cancel edit ends

// 	$tableData.delegate('.saveEdit', 'click', function()  {

// 		var $tr = $(this).closest('tr');

// 		var peopleObject = {
// 			name : $tr.find('input.name').val(),
// 			city : $tr.find('input.city').val(),
// 			phone : $tr.find('input.phone').val()
// 		};

// 		$.ajax({
// 			type: 'PUT',
// 			url : "http://localhost:8080/citizen/" + $tr.attr('data-id'),
// 			data : peopleObject,
// 			success : function(newPeople) {
// 				$tr.find('span.name').html(peopleObject.name);
// 				$tr.find('span.city').html(peopleObject.city);
// 				$tr.find('span.phone').html(peopleObject.phone);
// 				$tr.removeClass('edit');
// 			}

// 		}); // ajax put ends


// 	}); // save edit ends


// 	window.onscroll = yHandler;
// 	var start = 19;

// 	function yHandler() {
// 		"use strict"

// 		var $wrap = $('#wrap');
// 		var contentHeight = wrap.offsetHeight;
// 		var yOffset = window.pageYOffset;
// 		var y = yOffset + window.innerHeight;



// 		//if(flag==true) {

// 		if(y >= contentHeight) {

// 			wrap.innerHTML += 'div class= "newData"></div>';

// 			$.ajax({
// 				type : 'GET',
// 				url : "http://localhost:8080/citizen/?_start="+start+"&_limit=10",
// 				success : function(data) {

// 					//var abc= JSON.stringify(data);

// 					$.each(data, function(i, detail){

// 						addPeople(detail);


//        }); // each function ends

// 					start+=10;

// 		}, // success function ends

// 		error : function() {
// 			alert("Error loading page");
// 		}

// 	     }); // ajax search ends

// 		} // if ends

// 	//} // flag if ends

// 	} // yHandler ends	



// }); // ready function ends


// function validateName(str) {

// 	//var regex = /^[a-zA-Z]$/;

// 	var regex = /^[A-z ]+$/;

// 	if(regex.test(str)) {
// 		return true;
// 	 	//$('#inputName').focus();
// 	 }

// 	 else {
// 	 	alert("Name should be valid");
// 		return false;
// 	 }


// } // validateName ends

// function validateCity(str) {

// 	var regex = /^[A-z ]+$/;

// 	if(regex.test(str)) {
// 		return true;
// 		//$('#inputCity').focus();
// 	}

// 	else {
// 		alert("City should be valid");
// 		return false;
// 	}


// } // validateCity ends


// function validatePhone(str) {

// 	var regex = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/;

//     if (regex.test(str)) {
//     	return true;
//     }

// 	else {
// 		alert("Phone number should be valid");
// 		return false;
// 	}

// } // validatePhone ends


// ****************************************************************************************************************************************

var app = angular.module("myApp", []);

app.controller("myCtrl", function myResponse($scope, MyService) {

	$scope.val = true;
	$scope.myVal = true;
	$scope.spHide = false;
	$scope.btnhide = true;

	$scope.start = 3;

	$scope.funSearch = function() {

		$scope.val = false;
		getPeople();

		function getPeople() {

			MyService.getPeople($scope.txt)
			.success(function(response) {

					//alert(response);

					$scope.table_Data = response;

				})
			.error(function (error) { 

				$scope.table_Data = error.statusText;

			});


			}; // getPeople ends


        }; // funSearch ends

        $scope.funSave = function() {

        	$scope.val = false;

        	var peopleObject = {

        		name : $scope.user,
        		city : $scope.city,
        		phone : $scope.phone
        	};

        	MyService.addPeople(peopleObject)
        	.success(function(response) {

        		var insertedData = [response];

        		$scope.table_Data = insertedData;
        	})
        	.error(function(error) { 

        		$scope.table_Data = error.statusText;

        	});

        }; // funSave ends

        $scope.funDelete = function(rowIndx, dataIndx) {

        	//alert(rowIndx, dataIndx);

        	$scope.table_Data.splice(rowIndx, 1);

        	MyService.deletePeople(dataIndx)
        	.success(function(response) {

        		alert("Data deleted successfully");
        	})
        	.error(function(error) {

        		$scope.table_Data = error.statusText;


        	});


        }; // funDelete ends

        $scope.funLoad = function() {

        	$scope.val = false;
        	$scope.btnhide = false;

        	MyService.loadPeople()
        	.success(function(response) {

					$scope.table_Data = response;

				})
			.error(function (error) { 

				$scope.table_Data = error.statusText;

			});

        }; // funLoad ends

        $scope.funNext = function() {

        	alert($scope.start);
        	//alert($scope.limit);
        	$scope.start = $scope.start + 1;


        	MyService.loadNext($scope.start)
        	.success(function(response) {

					$scope.table_Data = response;

				})
			.error(function (error) { 

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
					//$scope.start = $scope.start - 1;

				})
			.error(function (error) { 

				$scope.table_Data = error.statusText;

			});

		} // else ends

        }; // funPrev ends

           $scope.funUpdate = function(r) {

        	// $scope.myVal = false;
        	// $scope.spHide = true;

        	if ($scope.active != r) {
      		  $scope.active = r;
    		}
    	else {
      		$scope.active = null;
    	}

        	}; // funUpdate ends

        	$scope.people = {};

       	$scope.funSaveUp = function(pobject,dataid) {

       		alert(pobject);
       		alert(dataid);

 				MyService.putPeople(pobject,dataid)
 				.success(function(response) {

					$scope.table_Data = [response];

				})
			.error(function (error) { 

				$scope.table_Data = error.statusText;

			});

        }; // funSaveUp ends

        	$scope.funCancel = function() {

        		// $scope.myVal = true;
        		// $scope.spHide = false;

        		$scope.active = null;
        	
        	}; // funCancel ends


	}); // myCtrl ends 


app.factory('MyService', function($http) {

	var MyService = {};

	MyService.getPeople = function(txt) {

		return $http.get("http://localhost:8080/citizen?q="+txt);

		};  // getPeople ends

		MyService.addPeople = function(people) {

			return $http.post("http://localhost:8080/citizen/", people);

    	}; // addPeople ends

    	MyService.deletePeople = function(dataIndx) {

    		return $http.delete("http://localhost:8080/citizen/"+dataIndx);

    	}; // deletePeople ends

    	MyService.loadPeople = function() {

    		return $http.get("http://localhost:8080/citizen/?_start=0&_limit=19");

		}; // loadPeople ends

		MyService.loadNext = function(start) {

			//alert(start);
			//alert(limit);

    		return $http.get("http://localhost:8080/citizen/?_page="+start);

		}; 

		MyService.putPeople = function(pobj,id) {

			return $http.put("http://localhost:8080/citizen/"+id,pobj);

		};

    	return MyService;

	}); // factory ends

