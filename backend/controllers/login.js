const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const db = require("../database/index");

loginRouter.post("/", async (req, res) => {
	const { email, password } = req.body;

	const user = await db.query("SELECT uuid, name, email, passwordhash FROM friticuser WHERE email = $1", [email]);
	const passwordCorrect =
		user.rows[0] === undefined ? false : await bcrypt.compare(password, user.rows[0].passwordhash);

	if (!(user.rows[0] && passwordCorrect)) {
		return res.status(401).json({
			error: "invalid email or password",
		});
	}

	const userForToken = {
		email: user.rows[0].email,
		uuid: user.rows[0].uuid,
	};

	// token expires in 3600 seconds; 1 hour
	const duration = 3600;
	const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: duration });
	res.status(200).send({ token, email: user.rows[0].email, name: user.rows[0].name });
});

module.exports = loginRouter;
