const dotenv = require("dotenv");
const LOCAL_DB_NAME = process.env.LOCAL_DB_NAME;
const config = {
	development: {
		username: "postgres",
		password: "12345",
		database: LOCAL_DB_NAME,
		host: "127.0.0.1",
		dialect: "postgres",
	},
	production: {
		username: "root",
		password: null,
		database: "database_production",
		host: "127.0.0.1",
		dialect: "mysql",
	},
};

module.exports = config;
