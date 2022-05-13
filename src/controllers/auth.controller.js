import { UserModel } from "*/models/user.model"
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
	const { id } = req.params
	try {
		const user = await UserModel.findOneById({ id })

		if (!user) return res.status(404).json("Wrong username");

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword) return res.status(404).json("Wrong password!");

		const token = generateAuthToken();
		console.log(token);
		res.status(200).send({ data: token, message: "logged in successfully" })
	} catch (error) {
		console.log(error)
		res.status(500).json(error)
	}
};


const generateAuthToken = () => {
	const userToken = UserModel.userCollectionName
	const token = jwt.sign({ _id: userToken._id }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "7d",
	});
	return token;
};



export const AuthController = { login }
