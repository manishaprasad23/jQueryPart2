
var app = angular.module("myApp", ["ngRoute"]);

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when("/addView", {
		templateUrl : "partials/addView.html",
		controller : "addViewCtrl"
	})
	.when("/tableView", {
		templateUrl : "partials/tableView.html",
		controller : "tableViewCtrl"
	})
	.when("/editView", {
		templateUrl : "partials/editView.html",
		controller : "editViewCtrl"
	})
	.otherwise({
		redirectTo : "/index.html"
	});

	$locationProvider.html5Mode({enabled: true, requireBase: false});
	
}]);  // config ends


app.controller("myCtrl", function myResponse($scope, MyService, MyText) {

	$scope.val = true;
	// $scope.myVal = true;
	// $scope.spHide = false;
	$scope.btnhide = true;

	$scope.start = 3;

	$scope.funSearch = function() {

		$scope.val = false;
		var flag = true;
		MyText.settxt($scope.txt);
		MyFlag.setflag(flag);

		}; // funSearch ends

	$scope.funLoad = function() {

		var flag = false;
		MyFlag.setflag(flag);
		alert(flag);

	};

	}); // myCtrl ends 
 