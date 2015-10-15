// todos los controllers que declaren los agregan en este archivo a o como lo llamen
app.controller("testController", ["$scope","DbService",
	function($scope,DbService)
	 {/*
	 	 DbService.getData().success(function(data){
	 		$scope.clients = data;	
	 	});*/

     $scope.characters = DbService.getData();

     
     $scope.insertCharacters = function () {
        var firstName = $scope.firstName;
        var lastName = $scope.lastName;
        var season = $scope.season;
        var chapter = $scope.chapter;

        DbService.insertCharacters(firstName, lastName, season, chapter);
        $scope.characters.firstName = '';
        $scope.characters.lastName = '';
        $scope.characters.season = '';
        $scope.characters.chapter = '';

    };

    $scope.deleteCharacters = function(){
    	var id = $scope.id;
        DbService.deleteCharacters(id);
        $scope.characters.id = '';
    }




     }]);

     