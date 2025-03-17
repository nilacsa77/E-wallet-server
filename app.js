const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/authRouter");

const app = express();
app.use(morgan("dev"));
app.use(
	cors({
		orging: "*",
	})
);
app.use(express.json());
app.use("/api/v1", authRouter);

module.exports = app;
