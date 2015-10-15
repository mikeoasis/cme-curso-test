//delete
app.service("DbService", function()
{
	this.getData = function(){
		return characters;
	};
	this.insertCharacters = function (firstName, lastName, season, chapter) {
		console.log(firstName);
		var topID = characters.length + 1;
		characters.push({
			id: topID,
			firstName: firstName,
			lastName: lastName,
			season: season,
			chapter: chapter
		});
	};
	this.deleteCharacters = function (id) {
		console.log(id);
		for (var i = characters.length - 1; i >= 0; i--) {
			if (characters[i].id === id) {
				characters.splice(i, 1);
				break;
			}
		}
	};
	this.getCharacters = function (id) {
		for (var i = 0; i < characters.length; i++) {
			if (characters[i].id === id) {
				return characters[i];
			}
		}
		return null;
	};
	var characters = [
	{"id": "1", "firstName": "Jon","lastName":"Snow","season":"1","chapter":"1"},
	{"id": "2", "firstName": "Sansa","lastName":"Stark","season":"1","chapter":"1"}
	];
});