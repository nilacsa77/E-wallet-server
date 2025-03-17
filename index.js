const dotenv = require("dotenv");
const app = require("./app");
const { sequelize } = require("./models");

dotenv.config({
	path: "./.env",
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`App running on port ${PORT} `);
	sequelize.sync().then(() => {
		console.log("DB CONNECTED SUCCESSFULY");
	});
});
