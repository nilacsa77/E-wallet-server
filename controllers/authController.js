const { Users } = require("./../models/");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const signup = async (req, res) => {
	const { fullName, email, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 14);

	await Users.create({
		fullName,
		email,
		password: hashedPassword,
	});
	return res.status(201).json({
		status: "Success",
		message: "user registration success",
	});
};
const login = async (req, res) => {
	const { email, password } = req.body;
	const userWithEmail = await Users.findOne({
		where: { email },
	});
	if (!userWithEmail) {
		return res.status(400).json({
			status: "Failed",
			message: "User with email not found",
		});
	}
	const isCollectPassword = await bcrypt.compare(password, userWithEmail.password);
	if (!isCollectPassword) {
		return res.status(400).json({
			status: "Failed",
			message: "Wrong email or password --- please check your cridentials and try again",
		});
	}
	const token = jwt.sign({ email, id: userWithEmail.id }, process.env.JWT_SECRET);
	return res.status(200).json({
		status: "Success",
		data: userWithEmail,
		token,
	});
};

module.exports = {
	signup,
	login,
};
