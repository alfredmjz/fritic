const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const db = require("../database/index");

dayjs.extend(customParseFormat);

//Retrieve all existing user
usersRouter.get("/", async (req, res, next) => {
	try {
		const users = await db.query("SELECT * FROM friticuser;");
		res.status(200).json({
			status: "success",
			results: results.rowCount,
			data: {
				user: users.rows,
			},
		});
	} catch (err) {
		next(err);
	}
});

//Create new user
usersRouter.post("/register", async (req, res, next) => {
	try {
		const { name, password, email, phoneNumber } = req.body;
		if (!name) {
			return res.status(400).json({
				error: "name is required",
			});
		}
		if (!email) {
			return res.status(400).json({
				error: "email is required",
			});
		}
		if (!password) {
			return res.status(400).json({
				error: "password is required",
			});
		}
		if (email.length < 3 || password.length < 3) {
			return res.status(400).json({
				error: "email and password must be at least 3 characters long",
			});
		}

		const existingUser = await db.query("SELECT email, COUNT(*) from friticuser GROUP BY email HAVING COUNT(*) > 1");
		if (existingUser.rowCount > 0) {
			return res.status(400).json({
				error: "email must be unique",
			});
		}
		const saltRounds = 10;
		const passwordHash = await bcrypt.hash(password, saltRounds);
		const currentTime = dayjs().format("YYYY-MM-DD HH:mm:ss-0");
		const registeredUser = await db.query(
			"INSERT INTO friticuser(uuid, name, passwordHash,  email,  phoneNumber, lastLogin) " +
				"VALUES(uuid_generate_v4(), $1, $2, $3, $4, $5) RETURNING *",
			[name, passwordHash, email, phoneNumber, currentTime]
		);

		res.status(201).json({
			status: "success",
			data: {
				user: registeredUser.rows[0],
			},
		});
	} catch (err) {
		next(err);
	}
});

usersRouter.post("/login", async (req, res) => {
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

module.exports = usersRouter;
