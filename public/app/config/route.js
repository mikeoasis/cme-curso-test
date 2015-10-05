// agreguen el routing, es decir la logica del routeProvider (esta logica de ruteo tambien puede ir en al app.js)

myApp.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "testController",
		templateUrl: "views/home.html"
	}).when("/grilla/", {
			controller: "testController",
		templateUrl: "views/home.html"

	}).otherwise({

		redirectTo: "/"
	});	

	});
