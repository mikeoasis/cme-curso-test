//delete
app.service("DbService", function()
{
	this.getData = function(){
		return clients;
	};
	this.insertClients = function (firstName, lastName, city) {
		var topID = clients.length + 1;
		clients.push({
			id: topID,
			firstName: firstName,
			lastName: lastName,
			city: city
		});
	};
	this.deleteClients = function (id) {
		for (var i = clients.length - 1; i >= 0; i--) {
			if (clients[i].id === id) {
				clients.splice(i, 1);
				break;
			}
		}
	};
	this.getClients = function (id) {
		for (var i = 0; i < clients.length; i++) {
			if (clients[i].id === id) {
				return clients[i];
			}
		}
		return null;
	};
	var clients = [
	{"id": "", "firstName": "Jon","lastName":"Snow","city":"Mendoza"},
	{"id": "", "firstName": "Sansa","lastName":"Stark","city":"Mendoza"}
	];
});