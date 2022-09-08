const restaurantRouter = require("express").Router();
const db = require("../database/index.js");

//Get all restaurants
restaurantRouter.get("/", async (req, res, next) => {
	try {
		const results = await db.query("SELECT * FROM restaurant");
		res.status(200).json({
			status: "success",
			results: results.rowCount,
			data: {
				restaurant: results.rows,
			},
		});
	} catch (err) {
		next(err);
	}
});

//Get one restaurant
restaurantRouter.get("/:id", async (req, res, next) => {
	try {
		const id = req.params.id;
		const results = await db.query("SELECT * FROM restaurant WHERE restaurant_uid = $1", [id]);
		res.status(200).json({
			status: "success",
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (err) {
		next(err);
	}
});

//Create a restaurant
restaurantRouter.post("/", async (req, res, next) => {
	try {
		const { name, cuisine, address, price_range } = req.body;
		const results = await db.query(
			"INSERT INTO restaurant (restaurant_uid, name, cuisine, address, price_range) VALUES (uuid_generate_v4(), $1, $2, $3, $4) RETURNING *",
			[name, cuisine, address, price_range]
		);
		res.status(200).json({
			status: "success",
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (err) {
		next(err);
	}
});

//Update a restaurant
restaurantRouter.put("/:id", async (req, res, next) => {
	try {
		const id = req.params.id;
		const { name, cuisine, address, price_range } = req.body;
		const results = await db.query(
			"UPDATE restaurant SET name = $1, cuisine = $2, address = $3, price_range = $4 WHERE restaurant_uid = $5 RETURNING *",
			[name, cuisine, address, price_range, id]
		);
		res.status(200).json({
			status: "success",
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (err) {
		next(err);
	}
});

//Delete a restaurant
restaurantRouter.delete("/:id", async (req, res, next) => {
	try {
		const id = req.params.id;
		const results = await db.query("DELETE FROM restaurant WHERE restaurant_uid = $1", [id]);
		res.status(200).json({
			status: "success",
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (err) {
		next(err);
	}
});

module.exports = restaurantRouter;
