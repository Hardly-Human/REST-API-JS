// Imports
const express = require("express");
const pieRepo = require("./repos/pie.repo.js");

// App
const app = express();
const PORT = 3000;

// Router
const router = express.Router();

// Data
const pieData = pieRepo.get();

// Routes
router.get("/", (req, res) => {
	res.status(200).json(pieData);
});

app.use("/api/", router);

// Listen
app.listen(PORT, () => {
	console.log("Server Running on port : ", PORT);
});
