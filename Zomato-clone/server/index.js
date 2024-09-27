const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

require("dotenv").config();
app.use(morgan("dev"));
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credential: true }));

// user routes
const userRoute = require("./routes/userRoutes.js");
const restraurantRoute = require("./routes/restraurantRoutes.js");
const productRoute = require("./routes/productRoutes.js");
const menuRoute = require("./routes/menuRoutes.js");
const paymentRoutes = require("./routes/payments.js");
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/zomato";
mongoose
	.connect(MONGODB_URL)
	.then((conn) => {
		console.log("connected to mongodb");
	})
	.catch((err) => {
		console.log(err);
	});

app.get("/", (req, res) => {
	return res.send("Hello World");
});

app.get("/ping", (req, res) => {
	return res.send("<h1>pong</h1>");
});

app.use("/api", userRoute);
app.use("/api", restraurantRoute);
app.use("/api", productRoute);
app.use("/api", menuRoute);
app.use("/api", paymentRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
	console.log(`listening on http://localhost:${PORT}`);
});
