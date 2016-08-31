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

			return $http.get("http://localhost:8080/citizen/?_page="+start);

		}; 

		MyService.putPeople = function(pobj,id) {

			return $http.put("http://localhost:8080/citizen/"+id,pobj);

   }; // putPeople ends

   MyService.getPeoplebyID = function(id) {

   	return $http.get("http://localhost:8080/citizen/"+id);

		};  // getPeople ends

		return MyService;

	}); // factory ends

app.service('Myfac',function() {

	var Myfac = {};

	return {
		getid: function () {
			return Myfac;
		},
		setid: function (value) {
			Myfac = value;
		}
	};


}); // Myfac ends

app.service('MyText', function() {

	var MyText = {};

	return {
		gettxt: function() {
			return MyText;
		},
		settxt: function(value) {
			MyText = value;
		}
	};


}); // MyText ends

// app.service('MyFlag', function() {

// 	var MyFlag = {};

// 	return {
// 		getflag: function() {
// 			return MyFlag;
// 		},
// 		setflag: function(value) {
// 			MyFlag = value;
// 		}
// 	};


// }); // MyFlag ends