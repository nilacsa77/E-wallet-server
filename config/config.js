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
		username: "postgres",
		password: "yHNJhFxPvDlmjloBBLKaPLkmpmWlXnKG",
		database: "railway",
		host: "postgres.railway.internal",
		dialect: "postgres",
		port: 44515,
		use_env_variable: "postgresql://postgres:yHNJhFxPvDlmjloBBLKaPLkmpmWlXnKG@ballast.proxy.rlwy.net:44515/railway",
	},
};

module.exports = config;
