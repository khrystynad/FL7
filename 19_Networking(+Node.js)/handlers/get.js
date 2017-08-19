const fs = require('fs');
const fileName = 'storage.json';

module.exports = function(app) {
	app.get('/users', function(req, res) {
		fs.readFile(fileName, function(err, data) {
			if (err) throw err;
			let storageData = data.length ? JSON.parse(data) : [];
			for (let el of storageData) {
				delete el.password;
			}
			res.status(200).send(storageData);
		});
	});
}