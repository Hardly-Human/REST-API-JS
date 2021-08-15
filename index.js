// Imports
const express = require("express");

// App
const app = express();
const PORT = 3000;

// Router
const router = express.Router();

// Routes
router.get("/", (req, res) => {
	res.send("Hello Rest API");
});

app.use("/api/", router);

// Listen
app.listen(PORT, () => {
	console.log("Server Running on port : ", PORT);
});
