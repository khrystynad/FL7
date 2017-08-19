const fs = require('fs');
const fileName = 'storage.json';
const passwordHash = require('password-hash');

module.exports = function(app) {
	app.put('/users/:id', function(req, res) {
		let id = req.params.id;
		let newData = req.body;
		fs.readFile(fileName, function(err, data) {
			if (err) throw err;
			let exists = false;
			let storageData = data.length ? JSON.parse(data) : [];
			let newUser = {};
			for (let el of storageData) {
				if (el.id == id) {
					if (newData.password) {
						newData.password = passwordHash.generate(newData.password);
					}
					el = Object.assign(el, newData);
					exists = true;
					newUser = el;
				}
			}
			if (exists) {
				fs.writeFile(fileName, JSON.stringify(storageData), function(err) {
					if (err) throw err;
				});
				delete newUser.password;
				res.status(200).send(newUser);
			} else {
				res.status(404).end();
			}
		});
	});
}