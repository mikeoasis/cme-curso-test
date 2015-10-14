// todos los controllers que declaren los agregan en este archivo a o como lo llamen
app.controller("testController", ["$scope","DbService", 
	function($scope,DbService)
	 {/*
	 	 DbService.getData().success(function(data){
	 		$scope.clients = data;	
	 	});*/

     $scope.clients = DbService.getData();

     
     $scope.insertClients = function () {
        var firstName = $scope.clients.firstName;
        var lastName = $scope.clients.lastName;
        var city = $scope.clients.city;

        clientsService.insertClients(firstName, lastName, city);
        $scope.clients.firstName = '';
        $scope.clients.lastName = '';
        $scope.clients.city = '';

    };




     }]);

     