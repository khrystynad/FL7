const fs = require('fs');
const passwordHash = require('password-hash');
const fileName = 'storage.json';

module.exports = function(app) {
	app.post("/users", function(req, res) {
	    fs.readFile(fileName, function(err, data) {
			if (err) throw err;
			let storageData = data.length ? JSON.parse(data) : [];
			let exists = false;
			for (let el of storageData) {
				if (el.username === req.body.username || el.id === req.body.id || el.email === req.body.email) {
					exists = true;
					res.status(409).end();
					break;
				}
			}
			if (!exists) {
				req.body.password = passwordHash.generate(req.body.password);
				storageData.push(req.body);
				fs.writeFile(fileName, JSON.stringify(storageData), function(err) {
					if (err) throw err;
				});
				res.status(201).end();
			}
		});
	});
}