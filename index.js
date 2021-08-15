// Imports
const express = require("express");
const pieRepo = require("./repos/pie.repo.js");

// App
const app = express();
const PORT = 3000;

// Router
const router = express.Router();

// Routes
router.get("/", (req, res, next) => {
	pieRepo.get(
		(data) => {
			res.status(200).json(data);
		},
		(err) => {
			next(err);
		}
	);
});

app.use("/api/", router);

// Listen
app.listen(PORT, () => {
	console.log("Server Running on port : ", PORT);
});
