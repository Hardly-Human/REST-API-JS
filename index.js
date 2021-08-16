// Imports
const express = require("express");
const pieRepo = require("./repos/pie.repo.js");

// App
const app = express();
const PORT = 3000;

// Router
const router = express.Router();

app.use(express.json());
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

router.get("/:id", (req, res, next) => {
	pieRepo.getById(
		req.params.id,
		(pie) => {
			if (pie) {
				res.status(200).json(pie);
			} else {
				res.status(404).json({
					message: `The pie ${req.params.id} is Not Found!`,
				});
			}
		},
		(err) => {
			next(err);
		}
	);
});

router.post("/", (req, res, next) => {
	pieRepo.insert(
		req.body,
		(data) => {
			res.status(201).json(data);
		},
		(err) => next(err)
	);
});

app.use("/api/", router);

// Listen
app.listen(PORT, () => {
	console.log("Server Running on port : ", PORT);
});
