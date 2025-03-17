"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		static associate(models) {
			// define association here
		}
	}
	Users.init(
		{
			fullName: DataTypes.STRING,
			password: DataTypes.STRING,
			email: DataTypes.STRING,
			resetPasswordToken: { type: DataTypes.STRING, allowNull: true },
			isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
		},
		{
			sequelize,
			timestamps: true,
			modelName: "Users",
			tableName: "users",
		}
	);
	return Users;
};
