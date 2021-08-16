const request = require("postman-request");

const apiHelper = {
	callApi: (url) => {
		return new Promise((resolve, reject) => {
			request(url, { json: true }, (err, res, body) => {
				if (err) {
					reject(err);
				} else {
					resolve(body);
				}
			});
		});
	},
};

module.exports = apiHelper;
