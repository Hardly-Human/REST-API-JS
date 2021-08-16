var express = require("express");
var router = express.Router();
const apiHelper = require("../helpers/apiHelpers.js");

/* GET home page. */
router.get("/", function (req, res, next) {
	apiHelper.callApi("http://localhost:5000/api").then((response) => {
		res.render("index", {
			title: "Pie's Shop",
			data: response,
		});
	});
});

module.exports = router;
