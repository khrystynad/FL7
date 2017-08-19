const fs = require('fs');
const fileName = 'storage.json';

module.exports = function(app) {
	app.get('/users/:id', function(req, res) {
		fs.readFile(fileName, function(err, data) {
			let storageData = data.length ? JSON.parse(data) : [];
			let result = {};
			let id = req.params.id;
			let exists = false;
			for (let el of storageData) {
				if (el.id == id) {
					result = Object.assign(result, el);
					delete result.password;
					exists = true;
				}
			}
			if (exists) {
				res.status(200).send(result);
			} else {
				res.status(404).end();
			}
		});
	});
}