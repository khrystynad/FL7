const fs = require('fs');
const fileName = './storage.json';

module.exports = function(app) {
	 app.delete('/users/:id', function (req, res) {
	 	let id = req.params.id;
	 	fs.readFile(fileName, function(err, data) {
	 		if (err) throw err;
	 		let storageData = data.length ? JSON.parse(data) : [];
	 		let exists = false;
	 		for (let i = 0; i < storageData.length; i++) {
	 			if (storageData[i].id == id) {
	 				storageData.splice(i, 1);
	 				exists = true;
	 				break;
	 			}
	 		}
	 		if (exists) {
	 			fs.writeFile(fileName, JSON.stringify(storageData), function(err, data) {
	 				if (err) throw err;
	 			});
	 			res.status(200).send({"message": "User has been successfully removed."});
	 		} else {
	 			res.status(404).end();
	 		}
		});
	});
}