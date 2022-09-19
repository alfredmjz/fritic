const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const db = require("../database/index");

loginRouter.post("/", async (req, res) => {
	const { email, password } = req.body;

	const user = await db.query("SELECT uuid, name, email, passwordhash FROM friticuser WHERE email = $1", [email]);
	const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.rows[0].passwordhash);

	if (!(user && passwordCorrect)) {
		return res.status(401).json({
			error: "invalid username or password",
		});
	}

	const userForToken = {
		email: user.email,
		uuid: user.uuid,
	};

	// token expires in 3600 seconds; 1 hour
	const duration = 3600;
	const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: duration });
	res.status(200).send({ token, email: user.email, name: user.name });
});

module.exports = loginRouter;
