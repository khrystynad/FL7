const fs = require('fs');
const fileName = './storage.json';

module.exports = function(app) {
	app.get('/users', function(req, res) {
		fs.readFile(fileName, function(err, data) {
			if (err) {
				throw err;
			} else if (data.length > 0) {
				let storageData = JSON.parse(data);
				for (let el of storageData) {
					delete el.password;
				}
				res.status(200).send(storageData);
			} else {
				res.status(200).send(['[]']);
			}
		});
	});
}