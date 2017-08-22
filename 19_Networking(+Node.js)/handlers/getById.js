const fs = require('fs');
const fileName = './storage.json';

module.exports = function(app) {
	app.get('/users/:id', function(req, res) {
		fs.readFile(fileName, function(err, data) {
			if (err) throw err;
			let storageData = data.length ? JSON.parse(data) : [];
			let result = {};
			let id = parseInt(req.params.id);
			let exists = false;
			for (let el of storageData) {
				if (el.id === id) {
					res.status(200).send(el);
					exists = true;
				}
			}
			if (!exists) {
				res.status(404).send(result);
			}
		});
	});
}