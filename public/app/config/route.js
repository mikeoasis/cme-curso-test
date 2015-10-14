// agreguen el routing, es decir la logica del routeProvider (esta logica de ruteo tambien puede ir en al app.js)
app.config(function($routeProvider){
	$routeProvider.when("/", {
		controller: "testController",
		templateUrl: "app/view/home.html"
	}).when("/grilla/", {
		controller: "testController",
		templateUrl: "app/view/grilla.html"
	}).when("/formulario/", {
		controller: "testController",
		templateUrl: "app/view/formulario.html"
	}).when("/detalle/", {
		controller: "testController",
		templateUrl: "app/view/detalle.html"
	}).otherwise({

		redirectTo: "/"
	});	

	});
