// Imports
const express = require("express");
const errorHelpers = require("./helper/errorHelper.js");
const pieRepo = require("./repos/pie.repo.js");
const errorHelper = require("./helper/errorHelper.js");
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

router.put("/:id", (req, res, next) => {
	pieRepo.getById(
		req.params.id,
		(data) => {
			if (data) {
				pieRepo.update(req.body, req.params.id, (data) => {
					res.status(200).json(data);
				});
			} else {
				res.status(404).json({
					message: "NOT_FOUND",
				});
			}
		},
		(err) => next(err)
	);
});

router.delete("/:id", (req, res, next) => {
	pieRepo.getById(req.params.id, (data) => {
		if (data) {
			pieRepo.delete(
				req.params.id,
				(data) => {
					res.status(200).json({
						message: "Deleted Successfully",
					});
				},
				(err) => next(err)
			);
		} else {
			res.status(404).json({
				message: "NOT_FOUND",
			});
		}
	});
});

app.use("/api/", router);

app.use(errorHelper.logErrors);
app.use(errorHelper.clientErrorHandler);
app.use(errorHelper.errorHandler);

// Listen
app.listen(PORT, () => {
	console.log("Server Running on port : ", PORT);
});
