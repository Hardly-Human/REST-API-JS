const fs = require("fs");

const FILE_NAME = "./assets/pies.json";

const pieRepo = {
	get: (resolve, reject) => {
		fs.readFile(FILE_NAME, (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(JSON.parse(data));
			}
		});
	},
	getById: (id, resolve, reject) => {
		fs.readFile(FILE_NAME, (err, data) => {
			if (err) {
				reject(err);
			} else {
				const pie = JSON.parse(data).find((p) => p.id == id);
				resolve(pie);
			}
		});
	},
	insert: (newData, resolve, reject) => {
		fs.readFile(FILE_NAME, (err, data) => {
			if (err) {
				reject(err);
			} else {
				const pies = JSON.parse(data);
				pies.push(newData);
				fs.writeFile(FILE_NAME, JSON.stringify(pies), (err) => {
					if (err) {
						reject(err);
					} else {
						resolve(newData);
					}
				});
			}
		});
	},
	update: (newData, id, resolve, reject) => {
		fs.readFile(FILE_NAME, (err, data) => {
			if (err) {
				reject(err);
			} else {
				const pies = JSON.parse(data);
				const pie = pies.find((p) => p.id == id);
				if (pie) {
					Object.assign(pie, newData);
					fs.writeFile(FILE_NAME, JSON.stringify(pies), (err) => {
						if (err) {
							reject(err);
						} else {
							resolve(newData);
						}
					});
				}
			}
		});
	},
	delete: (id, resolve, reject) => {
		fs.readFile(FILE_NAME, (err, data) => {
			if (err) {
				reject(err);
			} else {
				const pies = JSON.parse(data);
				const index = pies.findIndex((p) => p.id == id);
				if (index != -1) {
					pies.splice(index, 1);
					fs.writeFile(
						FILE_NAME,
						JSON.stringify(pies),
						(err, index) => {
							if (err) {
								reject(err);
							} else {
								resolve(index);
							}
						}
					);
				}
			}
		});
	},
};

module.exports = pieRepo;
